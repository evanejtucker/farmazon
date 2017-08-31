import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let comp: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(() => {
    const routerStub = {
      navigate: () => ({})
    };
    const userServiceStub = {
      setUserLoggedIn: () => ({})
    };
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: UserService, useValue: userServiceStub }
      ]
    });
    fixture = TestBed.createComponent(SignUpComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

});
