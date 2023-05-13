import { Component, Input } from '@angular/core';
import { Profile } from '../Models/Profile';
import { Experience } from '../Models/Experience';
import { Education } from '../Models/Education';
import { Contact } from '../Models/Contact';
import { Data } from '../Models/Data';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {

@Input()
myData!:Data;

}
