import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-courses',
  templateUrl: './update-courses.component.html',
  styleUrls: ['./update-courses.component.css']
})
export class UpdateCoursesComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private _http : HttpClient 
  ){}

  ngOnInit(): void {
  }
}

