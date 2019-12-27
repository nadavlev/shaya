/// <reference types="@types/googlemaps" />
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit, AfterViewInit {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;
  lat = 40.730610;
  lng = -73.935242;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
  };
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });
  public currentBusinesses: Business[] = [];
  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;
        this.coordinates = new google.maps.LatLng(this.lat, this.lng);
        this.mapOptions = {
          center: this.coordinates,
          zoom: 15,
        };
        this.marker = new google.maps.Marker({
          position: this.coordinates,
          map: this.map,
        });

        this.map = new google.maps.Map(this.gmap.nativeElement,
          this.mapOptions);

        const request = {
          location: this.coordinates,
          radius: 2000,
          types: ['cafe']
        };
         const service = new google.maps.places.PlacesService(this.map);
         service.nearbySearch(request, this.callback.bind(this));
        this.marker.setMap(this.map);
      });
    }
  }

  callback(res: google.maps.places.PlaceResult[], status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      this.currentBusinesses = res.map(place =>  {
        return {
          placeResult: place,
         name: place.name,
         id: place.id
       };
      });
      for (const place of res) {
        this.createMarker(place);
      }
    }
  }

  createMarker(place) {
    let marker = new google.maps.Marker({
      map: this.map, position: place.geometry.location
    });
  }

}
