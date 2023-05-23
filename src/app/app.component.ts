import { Component, OnInit, OnDestroy } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Data } from './Models/Data';
import { FirebaseServiceService } from './services/firebase-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {


  subObservable: any;
  title = 'resume';
  data!: Data ;

  constructor(private firebaseserv:FirebaseServiceService){

    this.subObservable = this.firebaseserv.getData().subscribe(
      (data)=>{
        this.data = data ;
        console.log(this.data);
      }
    ) ;

  }

}
