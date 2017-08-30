import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NgFor } from '@angular/common';
import {Router} from '@angular/router';
import { AppComponent } from '../app.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

location: any;

lat: number;
lng: number;

//Dummy Data
places = [{
	lat: 40,
	lng: -100
},
{
	lat: 35,
	lng: -110
}
];
	today = new Date();

constructor(private geolocation: Geolocation) {}


  ngOnInit() {

	//on page load grab user's location if they allow browser to	      

  	this.geolocation.getCurrentPosition().then((location) => {

 	this.lat = location.coords.latitude;
 	this.lng = location.coords.longitude;
 	this.location = location;
 	//Logged 
 	console.log("location grabbed: " + location);
 
}).catch((error) => {
  console.log('Error getting location', error);
});


  }

}
