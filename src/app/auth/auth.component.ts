import {Component, Input} from '@angular/core'
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData} from './auth.service';
 


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {
    @Input() isLoginMode = true;
    error:string = null;
    isLoading = false

    constructor(private authService: AuthService){}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }


    onSubmit(form:NgForm){
        if (!form.valid){
            return 
        }
        this.isLoading = true
        const email = form.value.email;
        const password = form.value.password;

        let authObs: Observable<AuthResponseData>

        if (this.isLoginMode){
            authObs = this.authService.login(email,password);
        } else {
            authObs = this.authService.signup(email,password);
        }

        authObs.subscribe(resData => {
            
        }, errorMessage => {
           
            this.error = errorMessage
        })


        form.reset()
        this.isLoading = false
    }


    onHandleError() {
        this.error=null;
    }
}