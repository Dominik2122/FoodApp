import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  timer:number = 7
  constructor() { 

  }

  ngOnInit(): void {
    setInterval(()=>{
      this.timer--
    }, 1000)
  }

}
