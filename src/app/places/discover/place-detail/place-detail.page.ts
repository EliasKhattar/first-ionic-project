import {Component, inject, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  standalone: false,
})
export class PlaceDetailPage implements OnInit {

  private navCtrl = inject(NavController);

  constructor() {
  }

  ngOnInit() {
  }

  onBookPlace() {
    this.navCtrl.navigateBack('/places/tabs/discover');
  }
}
