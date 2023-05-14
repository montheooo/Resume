import { Component } from '@angular/core';
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

  constructor(private firebaseserv:FirebaseServiceService){

  }

  title = 'resume';
  data$!: Observable<Data> ;

  ngOnInit():void{

    this.data$ = this.firebaseserv.getData() ;
    console.log(this.data$);
  }


}
