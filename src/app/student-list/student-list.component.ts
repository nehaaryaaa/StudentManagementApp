import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentArray: any=[];
  constructor(private studservice:StudentService) { 
    this.getstudArray();
  }
  
  ngOnInit(): void {
  }
  getstudArray(){
    this.studentArray= this.studservice.studentArray;
  }
 }
