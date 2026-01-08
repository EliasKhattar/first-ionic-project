import {Component, inject, OnInit} from '@angular/core';
import {ModalController, NavController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {Place} from "../../place.model";
import {PlacesService} from "../../places-service";
import {CreateBookingComponent} from "../../../bookings/create-booking/create-booking.component";

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  standalone: false,
})
export class PlaceDetailPage implements OnInit {
  place: Place | undefined;

  private navCtrl = inject(NavController);
  private route = inject(ActivatedRoute);
  private placesService = inject(PlacesService);
  private modalController = inject(ModalController);

  constructor() {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  onBookPlace() {
    // this.navCtrl.navigateBack('/places/tabs/discover');
    this.modalController.create({
      component: CreateBookingComponent,
      componentProps: {selectedPlace: this.place}
    })
      .then(modelEl => {
        modelEl.present();
        return modelEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData);
        if (resultData.role === 'confirm') {
          console.log("Booking is confirmed");
        }
      });
  }
}
