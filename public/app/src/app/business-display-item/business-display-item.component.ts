import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-business-display-item',
  templateUrl: './business-display-item.component.html',
  styleUrls: ['./business-display-item.component.scss']
})
export class BusinessDisplayItemComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() placeResult: google.maps.places.PlaceResult;
  @Input() listIndex: number;
public isOpen: boolean;
  constructor() { }

  ngOnInit() {
  }

  public onOpen() {
    this.isOpen = !this.isOpen;
  }

}
