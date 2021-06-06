import { Component, Input, OnInit } from '@angular/core';
import { Partners } from 'src/app/shared/models/Partner';

@Component({
  selector: 'partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  @Input() partner: Partners | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
