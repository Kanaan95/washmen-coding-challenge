import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MapsService } from '../services/maps.service';
import { Office } from '../shared/models/Office';

@Component({
  selector: 'maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit, OnDestroy {

  constructor(
    private _mapsService: MapsService
  ) { }

  /*  This is the data that will passed to the google maps component
      Each object has coordinates that will we pass them for the markers */
  @Input() data: any

  /*
   * To display the MapInfoWindow, it must be a child of a GoogleMap component, 
   * and it must have its open method called, 
   * so a reference to MapInfoWindow will need to be loaded using the ViewChild decorator. 
   */
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  // Google Maps options
  options: google.maps.MapOptions = {
    zoom: 10,
    fullscreenControl: false,
    maxZoom: 18,
    minZoom: 2,
    streetViewControl: false,
    disableDefaultUI: true
  };

  // Focus on partner in maps selected from sidebar 
  mapCenter: google.maps.LatLngLiteral = { lat: 51.5144636, lng: -0.142571 }

  // Meeting point
  starbucksMarker = {
    coordinates: {
      lat: 51.5144636,
      lng: -0.142571
    },
    icon: { url: 'assets/icons/pin.svg', scaledSize: new google.maps.Size(40, 40) }
  }

  // Google Maps Markers options
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    animation: google.maps.Animation.DROP,
    optimized: true,
  };

  // Markers positions
  markerPositions: google.maps.LatLngLiteral[] = [];

  // Google Maps Circle drawing options
  circleOptions: google.maps.CircleOptions = {
    center: { lat: 51.5144636, lng: -0.142571 },
    radius: 0,
    fillColor: "#2ecc71",
    fillOpacity: .5,
    editable: false,
    strokeWeight: 1,
    strokeColor: "#27ae60"
  }

  // Detect if any office location was clicked from partners in sidebar
  markersObs: any;

  ngOnInit(): void {
    this.markersObs = this._mapsService.focusedMarker.subscribe(
      (office: Office) => {
        if (office) {
          this.mapCenter = this.getCoordinates(office.coordinates)
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.markersObs?.unsubscribe()
  }

  /**
 * Converts string coordinates to object
 * @param coords
 * @access private
 * @returns 
 */
  getCoordinates(coords: string | boolean): google.maps.LatLngLiteral {
    coords = typeof coords == 'string' && coords.length > 0 && coords.split(',').length > 0 ? coords : false;

    if (coords) {
      const lat = Number(coords.split(',')[0])
      const lng = Number(coords.split(',')[1])
      return { lat, lng }
    }
    else {
      return { lat: -90, lng: -90 };
    }
  }

  /**
   * Get the marker icon for office clicked from the sidebar
   * @param office 
   */
  getMarkerIconPath(office: Office): google.maps.Icon {

    let url: string = ''
    const scaledSize = { height: 40, width: 60, equals: false }

    // Get the office coordinates
    const officeCoords = this.getCoordinates(office.coordinates)

    // Compare if it is the same with the mapCenter object
    const isSame = JSON.stringify(officeCoords) === JSON.stringify(this.mapCenter)

    if (isSame) url = "assets/icons/gps.svg"
    else url = "assets/icons/gps_marker.svg"

    const icon: google.maps.Icon = { url, scaledSize: new google.maps.Size(40, 40) }

    return icon
  }

  /**
   * Info window for marker
   * @param marker 
   */
  // openInfoWindow(marker: MapMarker) {
  //   // console.log(window)
  //   this.infoWindow?.open(marker);
  // }



}
