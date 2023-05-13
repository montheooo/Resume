import { Component, Input} from '@angular/core';
import { Contact } from '../Models/Contact';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @Input()
  footer!: Contact;
}
