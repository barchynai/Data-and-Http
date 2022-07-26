import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term = '';
  constructor() { }

  ngOnInit(): void {
  }

  onChange(){

  }

  FormSubmit(event: any){
    event.preventDefault();
    this.submitted.emit(this.term);
  }

}
