/// <reference types="@types/googlemaps" />
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MapDataService} from "@app/map-data.service";

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit, AfterViewInit {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  private map: google.maps.Map;
  private lat = 40.730610;
  private lng = -73.935242;
  private coordinates = new google.maps.LatLng(this.lat, this.lng);
  private mapOptions: google.maps.MapOptions;
  private marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });
  public currentBusinesses: Business[] = [];
  constructor(private router: Router, private mapDataService: MapDataService) {

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
          types: ['cafe'],
          fields: ['name', 'place_id']
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
          id: place.place_id
       };
      });
      this.mapDataService.getBusinessData(this.currentBusinesses);
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
