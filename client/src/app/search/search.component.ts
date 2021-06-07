import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onSearch = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  // Init form group with form control
  searchForm: FormGroup = new FormGroup({
    query: new FormControl('')
  })

  // Get the user's input
  get query(): AbstractControl | null {
    return this.searchForm.get('query')
  }

  // When user hits enter on the input field
  onSubmit(): void {
    this.onSearch.emit(this.query?.value)
  }

}

