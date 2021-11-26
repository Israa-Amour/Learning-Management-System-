import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.css']
})
export class EditCoursesComponent implements OnInit {

  editCourseForm: FormGroup = this._formbuilder.group({
    Course_Number : ['' , Validators.required],
    Course_Name : ['' , Validators.required],
    PlayList : ['' , Validators.required]

  });
  id :number = -1;
  constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
  }

  editCourse(){
    let Course_Name = this.editCourseForm.get('Course_Name')?.value;
    let PlayList = this.editCourseForm.get('PlayList')?.value;
    let url = "http://localhost:3000/course/edits";
    let obj = {Course_Number:this.id , Course_Name:Course_Name , PlayList:PlayList }
    this._http.put(url,obj).subscribe(data=>{console.log(data)
    alert("row edited");
    })

  }
}
