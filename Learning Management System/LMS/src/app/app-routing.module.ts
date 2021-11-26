import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { EventsComponent } from './events/events.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { AddRequestComponent } from './add-request/add-request.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { FeedbacksListComponent } from './feedbacks-list/feedbacks-list.component';
import { SucessfulPageComponent } from './sucessful-page/sucessful-page.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ResponseListComponent } from './response-list/response-list.component';
import { VeiwRequestComponent } from './veiw-request/veiw-request.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { UpdateCoursesComponent } from './update-courses/update-courses.component';
import { EditFeedbacksComponent } from './edit-feedbacks/edit-feedbacks.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { EditCoursesComponent } from './edit-courses/edit-courses.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'courses', component: CoursesPageComponent },
  { path: 'events', component: EventsComponent },
  { path: 'courses-list', component: CoursesListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'courses/add', component: AddCoursesComponent },
  { path: 'request/add', component: AddRequestComponent },
  { path: 'courses/deleteAll', component: DeleteCourseComponent },
  {path: 'courses/Update', component: UpdateCoursesComponent},
  {path: 'feedbacks', component: FeedbacksListComponent},
  {path: 'request/add', component: AddRequestComponent},
  {path: 'our-students', component: StudentsListComponent},
  {path: 'student/add', component: AddStudentComponent},
  {path: 'response', component: ResponseListComponent},
  {path: 'Success', component: SucessfulPageComponent},
  {path: 'viewRequest', component: VeiwRequestComponent},
  {path: 'teacher/add',component: AddTeacherComponent},
  {path: 'our-teacher',component: TeacherListComponent},
  {path: 'edit-teacher/:id',component:EditTeacherComponent},
  {path: 'feedbacks/edits/:id',component:EditFeedbacksComponent},
  {path: 'students/edits/:id',component:EditStudentComponent},
  {path: 'course/edits/:id',component:EditCoursesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent = [HomePageComponent , CoursesPageComponent , EventsComponent , ContactComponent,CoursesListComponent, DeleteCourseComponent,UpdateCoursesComponent
, FeedbacksListComponent]

