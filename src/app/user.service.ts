import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/toPromise';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Headers, Http } from '@angular/http';


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

		public baseUrl = 'http://localhost:8080/';

		public getProducts(path: string): Promise<any> {
			return this.http.get(this.baseUrl + path)
					.toPromise()
					.then(response => {
						console.log(`response from ${path}`,response);
						return response;
					})
					.catch((err) => err)
		}

  	getUserLoggedIn() {
  		return this.isUserLoggedIn;
  	}

    getVegtables() {
			return this.http.get("./assets/data/vegtables.json", {observe: "response"})
	}

	private headers = new Headers({ 'Content-Type': 'application/json' });
	
	private farmersUrl = 'api/farmers';
	
	//Still has bugs, trying to debug
	//-----------------------------------------
	// public createFarmer(path: string): Promise<any> {
	// 	return this.http
	// 	  .post(this.farmersUrl, JSON.stringify(SignUpComponent), { headers: this.headers })
	// 	  .toPromise()
	// 	  .then(res => res.json().data as SignUpComponent)
	// 	  .catch((err) => err);
	//   }

}
