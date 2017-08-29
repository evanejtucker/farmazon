import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

location: any;

lat: number;
lng: number;

constructor(private geolocation: Geolocation) {}


  ngOnInit() {

 


  this.geolocation.getCurrentPosition().then((location) => {
 // resp.coords.latitude
 // resp.coords.longitude
 	this.lat = location.coords.latitude;
 	this.lng = location.coords.longitude;



 	this.location = location;
 	console.log("location grabbed");
 
}).catch((error) => {
  console.log('Error getting location', error);
});



let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
});





  }

 

}
