import { Component, OnInit } from '@angular/core';
import student from './student.json';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
studs:{id:number,name:String,class:String}[]=student;
 show=false;
 display()
 {
   this.show=!this.show;
 }
 
 
}