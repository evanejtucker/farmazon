import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let comp: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    const geolocationStub = {
      getCurrentPosition: () => ({
        then: () => ({
          catch: () => ({})
        })
      })
    };
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: Geolocation, useValue: geolocationStub }
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  // it('places defaults to: [, , ]', () => {
  //   expect(comp.places).toEqual([, , ]);
  // });
});

describe('ngOnInit', () => {
  let comp: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    const geolocationStub = {
      getCurrentPosition: () => ({
        then: () => ({
          catch: () => ({})
        })
      })
    };
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: Geolocation, useValue: geolocationStub }
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    comp = fixture.componentInstance;
  });

  it('makes expected calls', () => {
    const geolocationStub = fixture.debugElement.injector.get(Geolocation);
    spyOn(geolocationStub, 'getCurrentPosition');
    comp.ngOnInit();
    expect(geolocationStub.getCurrentPosition).toHaveBeenCalled();
  });
});
