import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedbacks-list',
  templateUrl: './feedbacks-list.component.html',
  styleUrls: ['./feedbacks-list.component.css']
})
export class FeedbacksListComponent implements OnInit {

  feedbackslist: Array<any> = [];
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http
      .get('http://localhost:3000/feedbacks')
      .subscribe((response: any) => {
        this.feedbackslist = response;
      });
  }
  deletecourse(id: any) {
    let url = "http://localhost:3000/feedbacks/delete/"+id;
     this._http.delete(url).subscribe(data=>{console.log(data)})
     location.reload();
  }




}
