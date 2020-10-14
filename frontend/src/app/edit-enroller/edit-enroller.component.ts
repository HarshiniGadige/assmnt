import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { EnrolleeService } from '@app/services/enrollee.service';

@Component({
  selector: 'app-edit-enroller',
  templateUrl: './edit-enroller.component.html',
  styleUrls: ['./edit-enroller.component.css']
})
export class EditEnrollerComponent implements OnInit {

  options = [
    { value: true, text: 'True' },
    { value: false, text: 'False' }
  ];
  enrolleeForm: FormGroup;
  enrollerId: string;

  constructor(
    private enrolleeService: EnrolleeService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.enrollerId = this.route.snapshot.paramMap.get("id")
    this.loadEnroller();
    this.enrolleeForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      active: [false, Validators.required],
      dateOfBirth: ['']
    });
  }

  loadEnroller() {
    this.enrolleeService.getById(this.enrollerId).subscribe((enrolleer) => {
      this.enrolleeForm.setValue({
        id: enrolleer.id, name: enrolleer.name, active: enrolleer.active, dateOfBirth: enrolleer.dateOfBirth ? enrolleer.dateOfBirth : ''
      });
    });
  }


  changeStatus($event) {
    this.enrolleeForm.controls['active'].setValue(
      $event.target.value === 'true' ? true : false
    );
  }
  
  updateEnrollee() {
    this.enrolleeService.update(this.enrolleeForm.value)
      .subscribe(
        data => {
          this.router.navigate(['/enrollees']);
        });
  }
}
