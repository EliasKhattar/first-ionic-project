import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "./auth-service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: false,
})
export class AuthPage implements OnInit {

  private authService = inject(AuthService);

  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login();
  }
}
