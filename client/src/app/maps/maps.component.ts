import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }

  google: any;

  // Google Maps options
  options: google.maps.MapOptions = {
    center: { lat: 51.5144636, lng: -0.142571 },
    zoom: 10,
    fullscreenControl: false,
    maxZoom: 18,
    minZoom: 2,
    streetViewControl: false
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

}
