import { Component } from '@angular/core';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }],
})
export class AppComponent {
  showMenu: Boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
