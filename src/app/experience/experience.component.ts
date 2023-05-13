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
  exp! : Experience ;



}
