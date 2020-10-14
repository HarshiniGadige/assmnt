import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnrolleeService } from '@app/services';
import { of } from 'rxjs';

import { EditEnrollerComponent } from './edit-enroller.component';

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
  getById(id: string) {
    return of(enrollees[0]);
  }
  update(enrolee) {
    return of(enrolee);
  }
}

class MockRouter {
  navigate() {

  }
}

class MockActivatedRouter {
  snapshot = { paramMap: { get: (id) => 'fe1636a3-4d23-4068-ba56-551fae06e29c' } };
}

describe('EditEnrollerComponent', () => {
  let component: EditEnrollerComponent;
  let fixture: ComponentFixture<EditEnrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [EditEnrollerComponent],
      providers: [
        { provide: EnrolleeService, useClass: MockEnrolleeService },
        { provide: Router, useClass: MockRouter },
        { provide: ActivatedRoute, useClass: MockActivatedRouter }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEnrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set status of enrollee', () => {
    const event = { target: { value: 'true' } };
    component.changeStatus(event);
    expect(component.enrolleeForm.value.active).toEqual(true);
  });

  it('should updateEnrollee', () => {
    const enroleeService = TestBed.get(EnrolleeService);
    const spy = spyOn(enroleeService, 'update').and.callThrough();
    component.updateEnrollee();
    expect(spy).toHaveBeenCalled();
  });

  it('should get enrollee', () => {
    const enroleeService = TestBed.get(EnrolleeService);
    const spy = spyOn(enroleeService, 'getById').and.callThrough();
    component.enrollerId = 'fe1636a3-4d23-4068-ba56-551fae06e29c';
    component.loadEnroller();
    expect(spy).toHaveBeenCalled();
    expect(component.enrolleeForm.value).toEqual(enrollees[0]);
  });
});
