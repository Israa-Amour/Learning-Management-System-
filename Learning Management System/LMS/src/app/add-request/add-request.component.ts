import { HttpClient } from '@angular/common/http';
import { CoursesListComponent } from './../courses-list/courses-list.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {

  addRequestForm: FormGroup = this._formbuilder.group({
    Student_Student_ID: ['', Validators.required],
    Admin_Admin_ID: ['', Validators.required],
    Course_Number: ['', Validators.required],
    Course_Name: ['', Validators.required],
    Section_Number: ['', Validators.required],
    Reaquest_status: ['', Validators.required]

});

constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient
) { }

ngOnInit(): void { }

onSave(): void {

    let sid = this.addRequestForm.get('Student_Student_ID')?.value;
    let mid = this.addRequestForm.get('Admin_Admin_ID')?.value;
    let cnumber = this.addRequestForm.get('Course_Number')?.value;
    let cname = this.addRequestForm.get('Course_Name')?.value;
    let snumber = this.addRequestForm.get('Section_Number')?.value;
    let reqnumber = this.addRequestForm.get('Reaquest_status')?.value;

    
    let body = {
        Student_Student_ID: sid,
        Admin_Admin_ID: mid,
        Course_Number: cnumber,
        Course_Name: cname,
        Section_Number: snumber,
        Reaquest_status:reqnumber
    }
    console.warn(body);

    this._http.post("http://localhost:3000/requests", body).subscribe()


}
}