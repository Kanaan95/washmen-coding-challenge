import { Component, OnInit } from '@angular/core';
import { AppError } from './errors/app-error';
import { DataService } from './services/data.service';
import { MapsService } from './services/maps.service';
import { Partners } from './shared/models/Partner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isSideOpen: boolean = true;

  constructor(private _dataService: DataService, private _mapsService: MapsService) { }

  // Init list of partners
  partners: Partners[] | undefined;

  ngOnInit(): void {
    this._dataService.getAll('/partners').subscribe(
      (res: Partners[]) => this.partners = res
    )
  }

  /**
   * Toggles the sidebar menu
   */
  onToggle() {
    this.isSideOpen = !this.isSideOpen
  }

  searchPartnersWithin(range: number) {
    const radius = typeof range == 'number' ? range : 0;
    this._mapsService.radiusBehavior.next(radius)
    this._dataService.getSome('/partners/search', radius).subscribe(
      (res: Partners[]) => {
        this.partners = res

      }
    )
  }
}
