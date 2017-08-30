import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private server: UserService) { }

  ngOnInit() {
  	this.server.getVegtables().subscribe((vegtables) => {
      this.vegtables = vegtables.body;
      console.log()
    }); 
  }

  veggie:string

  vegtables:any = [];
  
  categories:any = ["vegtables", "fruits"];

   clickSearch(event, category) {
     event.preventDefault();
    //  alert(this.veggie);
    console.log('button click',category);
    this.server.getProducts('api/products/');
   }

   onChange(veggie) {
     this.veggie = veggie;
     console.log('on change',veggie);
   }

}
