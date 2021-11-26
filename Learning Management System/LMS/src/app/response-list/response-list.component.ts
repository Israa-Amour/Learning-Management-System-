import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-response-list',
  templateUrl: './response-list.component.html',
  styleUrls: ['./response-list.component.css']
})
export class ResponseListComponent implements OnInit {
  studentlist : Array<any> = [];
  studentform: FormGroup= this.fb.group({
    Response_Number : ['' , Validators.required],
    Response_status : ['' , Validators.required],
    comment : ['' , Validators.required],
    Request_Request_Number : ['' , Validators.required], 
    Request_Student_Student_ID : ['' , Validators.required]
  });;
  constructor(private course: HttpClient,
    private fb: FormBuilder,
    private _http : HttpClient)  { }

  ngOnInit(): void {
    this._http.get('http://localhost:3000/response')
    .subscribe((response: any) => {
      this.studentlist = response;
    })

  }

}
