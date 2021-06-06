import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }

  /*  This is the data that will passed to the google maps component
      Each object has coordinates that will we pass them for the markers */
  @Input() data: any

  // Google Maps options
  options: google.maps.MapOptions = {
    center: { lat: 51.5144636, lng: -0.142571 },
    zoom: 10,
    fullscreenControl: false,
    maxZoom: 18,
    minZoom: 2,
    streetViewControl: false,
    disableDefaultUI: true
  };

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

  ngOnInit(): void {
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

}
