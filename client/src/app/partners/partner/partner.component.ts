import { Component, Input, OnInit } from '@angular/core';
import { Office } from 'src/app/shared/models/Office';
import { MapsService } from '../../services/maps.service';
import { Partners } from '../../shared/models/Partner';

@Component({
  selector: 'partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  @Input() partner: Partners | undefined

  // Property to display he partner's office address when click on marker
  @Input() officeMarker: Office | undefined

  // Properties to show/hide border of the partner component
  @Input() hideBorders: boolean = false

  constructor(
    private _mapService: MapsService
  ) { }

  ngOnInit(): void {
  }

  /**
   * Zoom in on marker in map
   * @param office 
   */
  onLocationClick(office: any) {
    this._mapService.focusedMarker.next(office);
  }


}
