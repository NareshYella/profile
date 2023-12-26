import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile';
  isAdmin: boolean = false;

  constructor(private router: Router) {
    if (window.location.pathname === '/login') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }
}
