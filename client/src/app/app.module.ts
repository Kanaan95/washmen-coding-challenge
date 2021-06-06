import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MapsModule } from './maps/maps.module';
import { DataService } from './services/data.service';
import { AppErrorHandler } from './errors/app-error-handler';
import { PartnersModule } from './partners/partners.module';
import { FormsModule } from '@angular/forms';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MapsModule,
    PartnersModule,
    SearchModule,
    AppRoutingModule
  ],
  providers: [DataService, { provide: ErrorHandler, useClass: AppErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
