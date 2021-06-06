import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners.component';
import { PartnerComponent } from './partner/partner.component';



@NgModule({
  declarations: [
    PartnersComponent,
    PartnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PartnersModule { }
