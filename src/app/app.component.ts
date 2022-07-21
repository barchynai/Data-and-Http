import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { map, Observable } from 'rxjs';

//interface Car {     *** SIMPLE EXPLANATION OF OBSERVALES ***
//  year: number;
//  color: string;
//  running: boolean;
//  make: {
//    name: string;
//    dataCreated: number;
//  }
//}

//const observable = new Observable<Car>(observer => {
//  observer.next({
 //   year: 2000,
//    color: 'red',
//    running: true,
//   make: {
//      name: 'Chevy',
//      dataCreated: 1950
//    }
//  });
//}).pipe(
//  map(x => x?.make?.name)
//)

//observable.subscribe(value =>{
//  console.log(value)
//})

interface Search {
  title: string;
  snippet: string;
  pageid: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages: Search[] = [];
  constructor(private wikipedia: WikipediaService){}

  Term(term: string){
    this.wikipedia.search(term).subscribe((pages)=>{
      this.pages = pages;
    })
   }
}
