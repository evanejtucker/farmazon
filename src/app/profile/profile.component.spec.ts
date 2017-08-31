import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from '../user.service';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let comp: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(() => {
    const userServiceStub = {};
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: UserService, useValue: userServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ProfileComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

});
