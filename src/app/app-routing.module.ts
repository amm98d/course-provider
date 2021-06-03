import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './course-page/course-page.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'course/:id', component: CoursePageComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
