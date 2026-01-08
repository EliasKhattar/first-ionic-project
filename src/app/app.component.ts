import {Component, inject} from '@angular/core';
import {AuthService} from "./auth/auth-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  constructor() {}

  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth')
  }
}
