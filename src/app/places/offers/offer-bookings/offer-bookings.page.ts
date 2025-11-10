import {Component, inject, OnInit} from '@angular/core';
import {Place} from "../../place.model";
import {ActivatedRoute} from "@angular/router";
import {NavController} from "@ionic/angular";
import {PlacesService} from "../../places-service";

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
  standalone: false,
})
export class OfferBookingsPage implements OnInit {
  place: Place | undefined;
  private route = inject(ActivatedRoute);
  private navCtrl = inject(NavController);
  private placesService = inject(PlacesService);

  constructor() { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offers')
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    })
  }

}
