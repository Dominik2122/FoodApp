import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { filter, map, take, tap } from "rxjs/operators";
import { BehaviorSubject} from 'rxjs'
import { User } from "./user.model";
import { Order } from "../food/order/order";

export interface AuthResponseData {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    user = new BehaviorSubject<User>(null);

    constructor(
        private http: HttpClient
    ) { }


    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDUZKV7WB4-scvSRilyxyNsEWK49nTlHH4",
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            tap(resData => {
                this.handleAuthentication(
                    resData.email,
                    resData.localId,
                    resData.idToken,
                    +resData.expiresIn);
                this.createUserOrderList(resData.localId)

            })
        )
    }


    login(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDUZKV7WB4-scvSRilyxyNsEWK49nTlHH4',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(tap(resData => {
            this.handleAuthentication(
                resData.email,
                resData.localId,
                resData.idToken,
                +resData.expiresIn,

            )
        }))
    }


    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
        const user = new User(
            email,
            userId,
            token,
            expirationDate);
        this.user.next(user);
        localStorage.setItem('user', JSON.stringify(user))
    }

    private createUserOrderList(userId: string) {
        this.http.post('https://foodapp-8fffc-default-rtdb.europe-west1.firebasedatabase.app/users-orders.json', {

            userId: userId,
            orders: ['']

        })
            .pipe(take(1))
            .subscribe()
    }

    getUserOrderList() {
        let currentUserId: string;
        this.user.pipe(take(1)).subscribe(user => {
            currentUserId = user.id
        })
        return this.http.get<{ [key: string]: { orders: Order[], userId: string } }>("https://foodapp-8fffc-default-rtdb.europe-west1.firebasedatabase.app/users-orders.json")
            .pipe(
                map(data => Object.values(data)),
                map(arrayOfUsers => {

                    let currentUser = arrayOfUsers.filter(user => {
                        return user.userId == currentUserId
                    })

                    return currentUser[currentUser.length - 1];
                })
            )
    }

    mergeDataToUserOrderList(data: Order[]) {
        let currentUserId: string;
        this.user.pipe(take(1)).subscribe(user => {
            currentUserId = user.id
        })

        this.http.post(`https://foodapp-8fffc-default-rtdb.europe-west1.firebasedatabase.app/users-orders.json`, { orders: data, userId: currentUserId })
            .subscribe()

    }


    sendUserData(
        addressDetails: {
            user: string,
            details: {
                username: string,
                address: string,
                email: string,
                phone: string
            }
        }
    ) {
        this.http.post(`https://foodapp-8fffc-default-rtdb.europe-west1.firebasedatabase.app/users-details.json`,
        addressDetails)
            .subscribe()
    }

    fetchUserData(){
        
        const userEmail = this.user.value.email
        return this.http.get<{
            [id:string] : {
                user: string,
                details: {
                    username: string,
                    address: string,
                    email: string,
                    phone: string
                }}[]
             
        }>(`https://foodapp-8fffc-default-rtdb.europe-west1.firebasedatabase.app/users-details.json`)
            .pipe(
                map(x => Object.values(x)),
                map(x => {
                    let newObj = []
                    for (let obj of x){
                        if (obj['user'] == userEmail){
                            newObj.push(obj)
                        }
                    }
                    return newObj[newObj.length-1]
                })
            )
    }

}


