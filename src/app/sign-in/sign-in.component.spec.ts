import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let comp: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(() => {
    const routerStub = {
      navigate: () => ({})
    };
    const userServiceStub = {
      setUserLoggedIn: () => ({})
    };
    TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: UserService, useValue: userServiceStub }
      ]
    });
    fixture = TestBed.createComponent(SignInComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

});
