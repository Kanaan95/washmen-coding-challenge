import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Partners } from './shared/models/Partner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private _dataService: DataService) { }

  partners: Partners[] | undefined;

  ngOnInit(): void {
    this._dataService.getAll('/partners').subscribe(
      (res: Partners[]) => this.partners = res
    )
  }
}
