import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { StayComponent } from './stay/stay.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'student',component:StudentComponent},
  {path:'stay',component:StayComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
