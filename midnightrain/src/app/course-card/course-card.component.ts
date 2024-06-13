import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../model/course';
import { COURSES } from '../../db-data';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
@Input()
course:Course;

@Input()
javabanters:number;

@Input()
ocean:number;

@Output()
goodname= new EventEmitter<string>()


constructor(){}
onclick(){
  console.log("click for change") 
  this.goodname.emit("Good day")
}

}

