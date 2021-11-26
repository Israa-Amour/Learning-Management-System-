import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule , routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AddCoursesComponent } from './add-courses/add-courses.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list' ;
import { MatListModule } from '@angular/material/list'
import { AngularResizedEventModule } from 'angular-resize-event';
import { AddRequestComponent } from './add-request/add-request.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { UpdateCoursesComponent } from './update-courses/update-courses.component';
import { SucessfulPageComponent } from './sucessful-page/sucessful-page.component';
import { FeedbacksListComponent } from './feedbacks-list/feedbacks-list.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ResponseListComponent } from './response-list/response-list.component';
import { VeiwRequestComponent } from './veiw-request/veiw-request.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { EditFeedbacksComponent } from './edit-feedbacks/edit-feedbacks.component';
import { FilterPipe } from './teacher-list/filter';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { EditCoursesComponent } from './edit-courses/edit-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    AddCoursesComponent,
    AddRequestComponent,
    DeleteCourseComponent,
    UpdateCoursesComponent,
    SucessfulPageComponent,
    FeedbacksListComponent,
    ContactComponent,
    StudentsListComponent,
    AddStudentComponent,
    ResponseListComponent,
    VeiwRequestComponent,
    AddTeacherComponent,
    TeacherListComponent,
    EditTeacherComponent,    
    EditFeedbacksComponent,
    FilterPipe,
    
    EditTeacherComponent,    EditFeedbacksComponent, EditStudentComponent, EditCoursesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    AngularResizedEventModule,
    ReactiveFormsModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
