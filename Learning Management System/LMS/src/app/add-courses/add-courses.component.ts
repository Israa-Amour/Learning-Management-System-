import { HttpClient } from '@angular/common/http';
import { CoursesListComponent } from './../courses-list/courses-list.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit {

  /*AddCourseForm= new FormGroup({
    course_Number: new FormControl('')
  })*/
  AddCourseForm : FormGroup = this._formBuilder.group({
    Course_Number : ['' , Validators.required],
    Course_Name : ['' , Validators.required],
    PlayList : ['' , Validators.required]
  });

  constructor(private _formBuilder : FormBuilder ,
    private _http : HttpClient
    ) { }

  ngOnInit(): void {}

  onSave() : void {
   let Course_Number = this.AddCourseForm.get('Course_Number')?.value
   let Coursename = this.AddCourseForm.get('Course_Name')?.value
   let Play_List = this.AddCourseForm.get('PlayList')?.value

   let body = {
    Course_Number: Course_Number,
    Course_Name : Coursename ,
    PlayList : Play_List
   }

   this._http.post("http://localhost:3000/courses/add" , body)
   .subscribe(x=> console.log(x))

  }
}
