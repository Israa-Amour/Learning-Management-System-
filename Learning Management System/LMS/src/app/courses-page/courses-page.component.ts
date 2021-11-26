import { HttpClient,  HttpClientModule} from '@angular/common/http';
import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
