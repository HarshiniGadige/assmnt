import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnroleesComponent } from './enrollees.component';
import { EnrolleeService } from '@app/services';
import { of } from 'rxjs';
import { Router } from '@angular/router';

const enrollees = [
  {
    id: 'fe1636a3-4d23-4068-ba56-551fae06e29c',
    active: false,
    name: 'Jordan Mechner',
    dateOfBirth: '1964-06-04',
  },
  {
    id: '90ba3d4b-e3bb-435e-92c1-094534d00c94',
    active: false,
    name: 'Dona Bailey',
    dateOfBirth: '1953-02-16',
  }
];

class MockEnrolleeService {
  getEnrollees() {
    return of(enrollees);
  }
}

class MockRouter {
  navigate() {

  }
}

describe('EnroleesComponent', () => {
  let component: EnroleesComponent;
  let fixture: ComponentFixture<EnroleesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnroleesComponent],
      providers: [
        { provide: EnrolleeService, useClass: MockEnrolleeService },
        { provide: Router, useClass: MockRouter }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnroleesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should', () => {
    expect(1).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should get enrollees', () => {
    const enroleeService = TestBed.get(EnrolleeService);
    const spy = spyOn(enroleeService, 'getEnrollees').and.callThrough();
    component.loadEnrollees();
    expect(spy).toHaveBeenCalled();
    expect(component.enrollees).toEqual(enrollees);
  });

  it('should set enrollee data for edit', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate').and.stub();
    component.onEdit(enrollees[0]);
    expect(spy).toHaveBeenCalled();
  });
});
