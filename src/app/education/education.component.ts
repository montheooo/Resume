import { Component } from '@angular/core';
import { Education } from '../Models/Education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  myData: Education[] =

    [{

      organizationName:"Humber College",
      certificateName:"Certificate",
      programDescription:"",
      startDate:"Jan 2023",
      endDate:"June 2023",
      skills:["one"]
    },

    {
      organizationName:"University of Douala",
      certificateName:"Master Degree",
      programDescription:"",
      startDate:"2015",
      endDate:"2017",
      skills:["one"]
    }]

}
