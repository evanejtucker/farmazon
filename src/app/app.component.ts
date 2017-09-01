import { Component } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation', [
        state('small', style({
          transform: 'scale(1)',
        })),
        state('large', style({
          transform: 'scale(1.2)',
        })),

        transition('small <=> large', animate('300ms ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(35px)', offset: .5}),
          style({opacity: 1, transform: 'translateY(0)', offset: 1})
        ]))),
    ])
  ]
})
export class AppComponent {
  title = 'Farmazon';

  state: string = 'small';

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small')
  }

jokeBank: any = ["Why did the cabbage win the race?.....because it was ahead", "What is a farmers favorite Bruce Springsteen song?...Born in the USDA ", "Where do farmers send their kids?....Kinder-Garden", "What do you call a Nebraskan farmer with a sheep under each arm?....A pimp", "What's the best part of farming?....Getting down and dirty with my hoes", "What do you get when you cross an elephant with a garden?.....Squash!", "How did the chicken farmer get into the Guinness book of world records?...His record c--k"]

  // create random word, use example from rps 
randomJoke: string = this.jokeBank[Math.floor(Math.random() * this.jokeBank.length)];


}
