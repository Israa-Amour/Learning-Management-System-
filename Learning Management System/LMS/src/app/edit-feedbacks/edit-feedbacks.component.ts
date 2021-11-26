import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-feedbacks',
  templateUrl: './edit-feedbacks.component.html',
  styleUrls: ['./edit-feedbacks.component.css']
})
export class EditFeedbacksComponent implements OnInit {



  editfeedbacksform: FormGroup = this._formbuilder.group({
    idFeedback : ['' , Validators.required],
    Sender_Name : ['' , Validators.required],
    Subject : ['' , Validators.required],
    Mobile_Number : ['' , Validators.required],
    Email : ['' , Validators.required],
    message : ['' , Validators.required],

  });
  id :number = -1;
  constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
  }

  editFeedback(){
    let aname = this.editfeedbacksform.get('Sender_Name')?.value;
    let subject = this.editfeedbacksform.get('Subject')?.value;
    let Mobile_Number = this.editfeedbacksform.get('Mobile_Number')?.value;
    let Email = this.editfeedbacksform.get('Email')?.value;
    let message = this.editfeedbacksform.get('message')?.value;
    let url = "http://localhost:3000/feedback/edits";
    let obj = {idFeedback:this.id , Sender_Name:aname , Subject:subject , Mobile_Number : Mobile_Number , Email : Email, message : message}
    this._http.put(url,obj).subscribe(data=>{console.log(data)
    alert("row edited");
    })

  }

}
