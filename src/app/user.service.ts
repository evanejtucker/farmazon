import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 

@Injectable()
export class UserService {

	private isUserLoggedIn;
	private username;

  constructor(private http: HttpClient) { 
  	this.isUserLoggedIn = false;
  }

  	setUserLoggedIn() {
  		 this.isUserLoggedIn = true
  	}


  	getUserLoggedIn() {
  		return this.isUserLoggedIn;
  	}

    getVegtables() {
      return this.http.get("./assets/data/vegtables.json", {observe: "response"})
    }

}
