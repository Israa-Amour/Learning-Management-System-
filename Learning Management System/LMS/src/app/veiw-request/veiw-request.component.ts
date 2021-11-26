import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-veiw-request',
  templateUrl: './veiw-request.component.html',
  styleUrls: ['./veiw-request.component.css']
})
export class VeiwRequestComponent implements OnInit {
  requestList : Array<any> = []
  requestform: FormGroup= this.fb.group({
    Request_Number : ['' , Validators.required],
    Course_Number : ['' , Validators.required],
    Section_Number : ['' , Validators.required],
    Course_Name : ['' , Validators.required],
    Student_Student_ID : ['' , Validators.required],
    Admin_Admin_ID : ['' , Validators.required],
    Reaquest_status : ['' , Validators.required]
  });;

  constructor(private _http: HttpClient,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this._http.get('http://localhost:3000/requests').subscribe((x : any)=>{
      this.requestList = x
    })
  }

  deleterequest(id: any) {
    let url = "http://localhost:3000/viewRequest/delete/"+id;
    let obj = {Request_Number:id}
     this._http.delete(url).subscribe(data=>{console.log(data)})
   alert("row deleted");
   location.reload();
  }
  
  
}
