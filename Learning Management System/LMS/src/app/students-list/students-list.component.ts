import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  studentlist : Array<any> = [];
  studentform: FormGroup= this.fb.group({
    Student_ID : ['' , Validators.required],
    Student_Name : ['' , Validators.required],
    University_Major : ['' , Validators.required]
  });;
  constructor(
    private fb: FormBuilder,
    private _http : HttpClient)  { }

  ngOnInit(): void {
    this._http.get('http://localhost:3000/students')
    .subscribe((response: any) => {
      this.studentlist = response;
    })

  }
  deletestudent(id: any) {
    let url = "http://localhost:3000/our-students/delete/"+id;
     this._http.delete(url).subscribe(data=>{console.log(data)})
  }


}

