/// <reference types="@types/googlemaps" />
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MapDataService {

  constructor(private http: HttpClient) { 

  }

  public getPlaceData(location: google.maps.LatLng, businessType: string[]){
    const request = {
      location,
      radius: 2000,
      types: businessType
    };
    return this.http.post('http://localhost:3000/map/getPlaces', request);
  }

}
