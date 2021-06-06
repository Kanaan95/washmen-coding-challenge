import { Component, Input, OnInit } from '@angular/core';
import { MapsService } from '../../services/maps.service';
import { Partners } from '../../shared/models/Partner';

@Component({
  selector: 'partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  @Input() partner: Partners | undefined
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
