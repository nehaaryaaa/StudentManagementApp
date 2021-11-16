import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  studentArray: Array<Student>=[
    new Student(101,'Neha',21,'Female','nehaarya6110@gmail.com',8793457288,'Java'),
    new Student(102,'Pooja',26,'Female','poojaarya17@gmail.com',8888888888,'SQL'),
    new Student(101,'Pawan',15,'Male','pawanarya15@gmail.com',8793457588,'Python'),
    new Student(102,'Sejal',20,'Female','sejal17@gmail.com',8888885688,'PHP'),
    new Student(101,'Aryan',15,'Male','aryan15@gmail.com',8993057588,'Ruby'),
    
  ];
}
class Student{
  studentId:number;
  studentName:string;
  age:number;
  gender:string;
  email:string;
  mobileNumber:number;
  course:string;

  constructor(id:number,name:string, age:number, gender:string, mail:string, mob:number, course:string){
    this.studentId=id;
    this.studentName=name;
    this.age=age;
    this.gender=gender;
    this.email=mail;
    this.mobileNumber=mob;
    this.course=course;
  }
}
