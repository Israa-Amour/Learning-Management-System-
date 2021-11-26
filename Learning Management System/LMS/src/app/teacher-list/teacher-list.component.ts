import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  search='';
  teacherlist : Array<any> = [];
  techerform: FormGroup= this.fb.group({
    techer_ID : ['' , Validators.required],
    techer_Name : ['' , Validators.required],
  });;
  constructor(private _http: HttpClient,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this._http.get('http://localhost:3000/admins')
    .subscribe((response: any) => {
      this.teacherlist = response;
    })
  }

  deleteteacher(id: any) {
    let url = "http://localhost:3000/admins/delete/"+id;
    let obj = {Admin_ID:id}
    this._http.delete(url).subscribe(data=>{console.log(data)})
    alert("row deleted");
    location.reload();

  }
  
}
