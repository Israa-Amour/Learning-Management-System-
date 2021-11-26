import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit {
  status: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.delete('http://localhost:3000/courses/deleteAll')
    .subscribe(() => this.status = 'Delete successful');

  }

}
