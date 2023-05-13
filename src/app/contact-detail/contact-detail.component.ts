import { Component } from '@angular/core';
import { Contact } from '../Models/Contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {

  myData: Contact = {

      email:"montheooo@yahoo.fr",
      phone:"+1 438-969-7973",
      website:"intelcameroun.net",
      address:"Ottawa-Ontario"

  }
}
