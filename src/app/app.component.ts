import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { User } from './auth/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private authService:AuthService){}
  ngOnInit() {


    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      this.authService.user.next(user)
    }
  }
}
