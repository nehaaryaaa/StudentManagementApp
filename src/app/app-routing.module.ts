import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchStudentComponent } from './search-student/search-student.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:'view', component: StudentListComponent},
  {path:'add', component: StudentListComponent},
  {path:'update', component: StudentListComponent},
  {path:'delete', component: StudentListComponent},
  {path:'search/:studentId', component: SearchStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
