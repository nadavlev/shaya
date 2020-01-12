import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapDataService {

  constructor() { }
  public getBusinessData(businesses: Business[]) {
    console.table(businesses);
  }
}
