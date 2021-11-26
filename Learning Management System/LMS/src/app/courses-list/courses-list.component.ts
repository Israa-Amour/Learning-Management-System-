import { HttpClient,  HttpClientModule} from '@angular/common/http';
import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  coursesList : Array<any> =[]
  courseForm: FormGroup= this.fb.group({
    Course_Number : ['' , Validators.required],
    Course_Name : ['' , Validators.required],
    PlayList : ['' , Validators.required]
  });;
  constructor(private course: HttpClient,
    private fb: FormBuilder,
    private _http : HttpClient) { }

  ngOnInit(): void {
    this.course.get('http://localhost:3000/courses').subscribe((x : any)=>{
      this.coursesList = x
    })

  }
  deletecourse(id: any) {
    let url = "http://localhost:3000/courses/delete/"+id;
    let obj = {Course_Number:id}
     this._http.delete(url).subscribe(data=>{console.log(data)})
     location.reload();
  }
}

