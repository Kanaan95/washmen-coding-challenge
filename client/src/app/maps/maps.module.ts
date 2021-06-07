import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { PartnersModule } from '../partners/partners.module';


@NgModule({
  declarations: [
    MapsComponent
  ],
  imports: [
    CommonModule,
    PartnersModule,
    GoogleMapsModule
  ],
  exports: [
    MapsComponent
  ]
})
export class MapsModule { }
