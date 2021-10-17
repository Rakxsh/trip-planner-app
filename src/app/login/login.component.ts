import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String="";
     password: String="";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
    login() : void {
    if(this.username == 'rakesh' && this.password == 'rakesh@123'){
     this.router.navigate(["home"]);
    }else if(this.username == 'vijay' && this.password == 'vijay@123'){
this.router.navigate(["home"]);
    }
    else{
      alert("Invalid credentials");
    }

}
}
