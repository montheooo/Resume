import { Component, Input} from '@angular/core';
import { Contact } from '../Models/Contact';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @Input()
  myData: Contact =
  {
    email:"montheooo@yahoo.fr",
    phone:"+1 438-969-7973",
    website:"intelcameroun.net",
    address:"Ottawa-Ontario"
  }
}
