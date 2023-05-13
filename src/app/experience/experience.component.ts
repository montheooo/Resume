import { Component, Input } from '@angular/core';
import { Data } from '../Models/Data';
import { Experience } from '../Models/Experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  @Input()
  myData: Experience =

  {

      company:"Cascades",
      position:"Sorter",
      startDate:"Nov 2022",
      endDate:"April 2023",
      location:"Ottawa-Ontario",
      role:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
      skills:["one", "two", "three", "four"]

    }

}
