import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from '../user.service';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let comp: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(() => {
    const userServiceStub = {
      getVegtables: () => ({
        subscribe: () => ({})
      }),
      getProducts: () => ({})
    };
    TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: UserService, useValue: userServiceStub }
      ]
    });
    fixture = TestBed.createComponent(SearchBarComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('vegtables defaults to: []', () => {
    expect(comp.vegtables).toEqual([]);
  });

  // it('categories defaults to: ['vegtables', 'fruits']', () => {
  //   expect(comp.categories).toEqual(['vegtables', 'fruits']);
  // });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const userServiceStub = fixture.debugElement.injector.get(UserService);
      spyOn(userServiceStub, 'getVegtables');
      comp.ngOnInit();
      expect(userServiceStub.getVegtables).toHaveBeenCalled();
    });
  });

});
