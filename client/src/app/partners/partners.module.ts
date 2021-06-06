import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners.component';
import { PartnerComponent } from './partner/partner.component';
import { SortByPipe } from '../shared/pipes/sort.pipe';



@NgModule({
  declarations: [
    PartnersComponent,
    PartnerComponent,
    SortByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PartnerComponent,
    PartnersComponent
  ]
})
export class PartnersModule { }
