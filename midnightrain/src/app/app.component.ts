import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  courseList1:Course = COURSES [1];
  courses = COURSES;
  press(roses:string){
   console.log("parent");
   console.log(roses);

  }
}
