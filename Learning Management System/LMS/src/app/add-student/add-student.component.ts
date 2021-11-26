import { HttpClient } from '@angular/common/http';
import { CoursesListComponent } from './../courses-list/courses-list.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  
  addstudentform: FormGroup = this._formbuilder.group({
    Student_ID: ['', Validators.required],
    Student_Name: ['', Validators.required],
    University_Major: ['', Validators.required],

});

constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient
) { }

ngOnInit(): void { }

onSave(): void {

    let sid = this.addstudentform.get('Student_ID')?.value;
    let sname = this.addstudentform.get('Student_Name')?.value;
    let major = this.addstudentform.get('University_Major')?.value;

    
    let body = {
      Student_ID: sid,
      Student_Name: sname,
      University_Major: major,
    
    }
    console.warn(body);

    this._http.post("http://localhost:3000/students/add", body).subscribe()


}

}
