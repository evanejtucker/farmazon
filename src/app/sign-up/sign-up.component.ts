import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from "../user.service";



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  constructor(private router:Router, private user: UserService) { }

  ngOnInit() {
  }

  createFarmer(e) {


e.preventDefault();



let name = e.target.elements[0].value;
let farm_name = e.target.elements[1].value;
let city = e.target.elements[2].value;
let state = e.target.elements[3].value;
let zip = e.target.elements[5].value;
let phone = e.target.elements[6].value;
let email = e.target.elements[7].valu;
let image = e.target.elements[8].value

console.log(name, farm_name, city, state, zip, phone, email, image);

if (name === "" || farm_name === "") {
  alert("your missing something....");
  return false
}

else {
  this.user.setUserLoggedIn();
  alert("you are now a farmer!!")
  this.router.navigate(['profile']);
  return true;
}

  }




  // onSubmit() { this.submitted = true; }

}
