import { Component, OnInit } from '@angular/core';
import { Enrollee } from "@app/models";
import { EnrolleeService } from "@app/services";
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrollees',
  templateUrl: './enrollees.component.html',
  styleUrls: ['./enrollees.component.css']
})
export class EnroleesComponent implements OnInit {

  enrollee: Enrollee;
  enrollees: Array<Enrollee>;

  constructor(
    private enrolleeService: EnrolleeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadEnrollees();
  }

  loadEnrollees() {
    this.enrolleeService.getEnrollees().subscribe(enrollees => {
      this.enrollees = enrollees;
    });
  }

  onEdit(enrolee) {
    this.router.navigate(['/enrollees', enrolee.id]);
  }
}
