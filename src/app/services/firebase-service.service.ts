import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, take, tap } from 'rxjs';
import { Data } from '../Models/Data';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private http: HttpClient) { }

  getData(){

    return this.http.get<Data>('https://cloud-developer-a259f-default-rtdb.europe-west1.firebasedatabase.app/data.json').pipe(
      delay(3000),
      tap(data => console.log(data)),
      take(1)
    );
  }

}
