import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { StudentService } from '../student.service';
import { FormsModule,FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {
  studentArray: any=[];
  temp : string | null;
  studId:number=0;
  detailsObj: StudentService |undefined;
  constructor(private activeRoute:ActivatedRoute, private studservice: StudentService) {
    //extrat rout parameters
    //snapshot method //observable method
    this.temp=activeRoute.snapshot.paramMap.get("studentId");
    if(this.temp!=null)
      this.studId=parseInt(this.temp);
    this.getstudArray();
    this.findDetails();
   }

  ngOnInit(): void {
  }

  getstudArray(){
    this.studentArray= this.studservice.studentArray;
  }
  findDetails(){
    this.detailsObj=this.studentArray.find((detail: { studentId: number; })=> detail.studentId==this.studId);
    
  }
}
