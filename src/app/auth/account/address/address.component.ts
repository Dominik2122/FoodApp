import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  name:string = '';
  address:string = '';
  phone:string ='';
  success=false
  deliveryForm = new FormGroup({
    name: new FormControl(this.name, [
      Validators.required
    ]),
    address: new FormControl(this.address, [
      Validators.required
    ]),
    phone: new FormControl(this.phone, [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9)
    ])
  })
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.authService.user.value){
      this.authService.fetchUserData().subscribe(data => {
        this.name = data['details'].username;
        this.address = data['details'].address;
        this.phone = data['details'].phone
        this.deliveryForm = new FormGroup({
          name: new FormControl(this.name, [
            Validators.required
          ]),
          address: new FormControl(this.address, [
            Validators.required
          ]),
          phone: new FormControl(this.phone, [
            Validators.required,
            Validators.minLength(9),
            Validators.maxLength(9)
          ])
        })
      })
    }
 
  }

  saveAddress(){
    const { name, address, phone } = this.deliveryForm.value
    const userEmail = this.authService.user.value.email
    const addressDetails = {
      user: userEmail,
      details: {
        username: name,
        address: address,
        email: userEmail,
        phone: phone
      }
    }

    this.authService.sendUserData(addressDetails)
    this.router.navigate(['/'])
    
  }

}
