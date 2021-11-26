import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {


  addteacherform: FormGroup = this._formbuilder.group({
    Admin_ID: ['', Validators.required],
    Admin_Name: ['', Validators.required],
    
  });
  constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient)   { }

  ngOnInit(): void {
  }

  onSave(): void {

    let aid = this.addteacherform.get('Admin_ID')?.value;
    let aname = this.addteacherform.get('Admin_Name')?.value;

    
    let body = {
      Admin_ID: aid,
      Admin_Name: aname,
    
    }
    console.warn(body);

    this._http.post("http://localhost:3000/admins/add", body).subscribe()

    

}
}
