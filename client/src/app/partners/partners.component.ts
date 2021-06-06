import { Component, OnInit, Input } from '@angular/core';
import { Partners } from '../shared/models/Partner';

@Component({
  selector: 'partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  constructor() { }

  @Input() partners: Partners[] | undefined

  ngOnInit(): void {
    console.log("Partners from comp: ", this.partners)
  }

}
