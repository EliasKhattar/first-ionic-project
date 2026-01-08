import {Component, inject, Input} from '@angular/core';
import {IonicModule, ModalController} from "@ionic/angular";
import {Place} from "../../places/place.model";

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
  imports: [
    IonicModule
  ]
})
export class CreateBookingComponent {
  @Input() selectedPlace: Place | undefined
  private modelController = inject(ModalController)

  constructor() {
  }

  onCancel() {
    this.modelController.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modelController.dismiss({message: 'This is a dummy msg'}, 'confirm')
  }
}
