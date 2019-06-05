import { Component } from '@angular/core';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-demo';

  constructor(public guard: AuthService) {}

  logout() {
    console.log("logout!")
    this.guard.logout()
  }



}
