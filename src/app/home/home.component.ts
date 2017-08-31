import { Component, OnInit, OnDestroy, OnChanges, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NgFor } from '@angular/common';
import {Router} from '@angular/router';
import { AppComponent } from '../app.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { AgmCoreModule } from '@agm/core';


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
	lat: 39.73602,
	lng: -104.8839
},
{
	lat: 39.60402,
	lng: -104.639
},
{
	lat: 39.70402,
	lng: -104.939
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
 	console.log("location grabbed: " + this.lat + " " + this.lng);
 
}).catch((error) => {
  console.log('Error getting location', error);
});


  }
	// open(): Promise<void> { return this._infoWindowManager.open(this); }
	// close(): Promise<void> {
  //   return this._infoWindowManager.close(this).then(() => { this.infoWindowClose.emit(); });
  // }

}
