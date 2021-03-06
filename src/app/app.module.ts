import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './user.service';


import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthguardGuard } from './authguard.guard';

import { NgFor } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    canActivate: [AuthguardGuard],
    component: ProfileComponent, 
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    SearchBarComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBb44GEujIrnkFexqREwJEXfrOvy5MYlJo'
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [Geolocation, UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
