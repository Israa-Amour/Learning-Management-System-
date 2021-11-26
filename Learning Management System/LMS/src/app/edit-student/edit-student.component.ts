import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {


  editStudentform: FormGroup = this._formbuilder.group({
    Student_ID : ['' , Validators.required],
    Student_Name : ['' , Validators.required],
    University_Major : ['' , Validators.required]

  });
  id :number = -1;
  constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
  }

  editStudent(){
    let Student_Name = this.editStudentform.get('Student_Name')?.value;
    let University_Major = this.editStudentform.get('University_Major')?.value;
    let url = "http://localhost:3000/student/edits";
    let obj = {Student_ID:this.id , Student_Name:Student_Name , University_Major:University_Major}
    this._http.put(url,obj).subscribe(data=>{console.log(data)
    alert("row edited");
    })

  }


}
