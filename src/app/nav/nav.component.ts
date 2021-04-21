import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authSection:boolean
  userLogged:string = null
  loginMode:boolean=true
  isDropdownActive = false
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      if (user){this.userLogged = user.email}
    })
  }

  
  
}
