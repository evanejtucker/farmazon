import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('title defaults to: Farmazon', () => {
    expect(comp.title).toEqual('Farmazon');
  });

  // it('state defaults to: small', () => {
  //   expect(comp.state).toEqual('small');
  // });

  // it('jokeBank defaults to: ['Why did the cabbage win the race?.....because it was ahead', 'What is a farmers favorite Bruce Springsteen song?...Born in the USDA ', 'Where do farmers send their kids?....Kinder-Garden', 'What do you call a Nebraskan farmer with a sheep under each arm?....A pimp', 'What's the best part of farming?....Getting down and dirty with my hoes', 'What do you get when you cross an elephant with a garden?.....Squash!', 'How did the chicken farmer get into the Guinness book of world records?...His record c--k']', () => {
  //   expect(comp.jokeBank).toEqual(['Why did the cabbage win the race?.....because it was ahead', 'What is a farmers favorite Bruce Springsteen song?...Born in the USDA ', 'Where do farmers send their kids?....Kinder-Garden', 'What do you call a Nebraskan farmer with a sheep under each arm?....A pimp', 'What's the best part of farming?....Getting down and dirty with my hoes', 'What do you get when you cross an elephant with a garden?.....Squash!', 'How did the chicken farmer get into the Guinness book of world records?...His record c--k']);
  // });
});
