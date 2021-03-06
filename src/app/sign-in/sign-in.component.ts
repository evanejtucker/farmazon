import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router:Router, private user: UserService) { }

  ngOnInit() {
  }


  loginUser(e) {
  	e.preventDefault();

  	let username = e.target.elements[0].value;
  	let password = e.target.elements[1].value;

  	console.log(username, password)

  	if(username === "" || password === "") {
  		alert("you need to enter a username or password");
  		return false
  	}

  	else {
  		this.user.setUserLoggedIn();
  		alert("good job!")
  		this.router.navigate(['profile']);
  		return true;
  	} 
  }
}
