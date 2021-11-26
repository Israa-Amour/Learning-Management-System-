import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  editteacherform: FormGroup = this._formbuilder.group({
    Admin_ID: ['', Validators.required],
    Admin_Name: ['', Validators.required],

  });
  id :number = -1;

  constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient,
    private route:ActivatedRoute
    )   { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  editteaacher(){
    let aname = this.editteacherform.get('Admin_Name')?.value;
    let url = "http://localhost:3000/admins/edits/";
    let obj = {Admin_ID:this.id , Admin_Name:aname}
    this._http.put(url,obj).subscribe(data=>{console.log(data)
    alert("row edited");
   location.reload();

    })


  }
}
