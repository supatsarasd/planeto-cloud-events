import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'Sign In';
    alert('Open ' + this.clickMessage );
  }

  onClickMe2() {
    this.clickMessage = 'Sign Up';
    alert('Open ' + this.clickMessage );
    
  }

}
