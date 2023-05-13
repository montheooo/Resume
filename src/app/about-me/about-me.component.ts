import { Component, Input } from '@angular/core';
import { Profile } from '../Models/Profile';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  @Input()
  about!: Profile ;

}
