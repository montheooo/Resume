import { Component,Input } from '@angular/core';
import { Education } from '../Models/Education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  @Input()
  education!: Education ;

}
