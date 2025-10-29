import {Component, inject, OnInit} from '@angular/core';
import {PlacesService} from "../places-service";
import {Place} from "../place.model";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: false,
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[] = [];
  private placesService = inject(PlacesService);

  constructor() {
  }

  ngOnInit() {
  this.loadedPlaces = this.placesService.places;
  }

}
