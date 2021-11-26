import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  AddfeedbackGroup : FormGroup = this._formBuilder.group({
    idFeedback : ['' , Validators.required],
    Sender_Name : ['' , Validators.required],
    Subject : ['' , Validators.required],
    Mobile_Number : ['' , Validators.required],
    Email : ['' , Validators.required],
    message : ['' , Validators.required],
  });

  constructor(private _formBuilder : FormBuilder ,
    private _http : HttpClient
    ) { }

  ngOnInit(): void {}

  onSave() : void {
   let idFeedback = this.AddfeedbackGroup.get('idFeedback')?.value
   let Sender_Name = this.AddfeedbackGroup.get('Sender_Name')?.value
   let Subject = this.AddfeedbackGroup.get('Subject')?.value
   let Mobile_Number = this.AddfeedbackGroup.get('Mobile_Number')?.value
   let Email = this.AddfeedbackGroup.get('Email')?.value
   let message = this.AddfeedbackGroup.get('message')?.value

   let body = {
    idFeedback: idFeedback,
    Sender_Name : Sender_Name ,
    Subject : Subject,
    Mobile_Number: Mobile_Number,
    Email : Email ,
    message : message,
   }

   this._http.post("http://localhost:3000/feedbacks/add" , body)
   .subscribe(x=> console.log(x))

  }
}
