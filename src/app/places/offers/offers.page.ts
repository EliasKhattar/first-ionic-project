import {Component, inject, OnInit} from '@angular/core';
import {PlacesService} from "../places-service";
import {Place} from "../place.model";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
  standalone: false,
})
export class OffersPage implements OnInit {

  offers: Place[] | undefined;
  private placesService = inject(PlacesService);
  constructor() { }

  ngOnInit() {
    this.offers = this.placesService.places;
  }

}
