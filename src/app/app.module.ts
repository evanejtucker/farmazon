import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';


import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';



const appRoutes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
     
  },
  { 
    path: 'sign-in', 
    component: SignInComponent, 
  },
  { 
    path: 'sign-up', 
    component: SignUpComponent, 
  },
  { 
    path: 'profile', 
    component: ProfileComponent, 
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBb44GEujIrnkFexqREwJEXfrOvy5MYlJo'
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [Geolocation],
  bootstrap: [AppComponent]
})
export class AppModule { }
