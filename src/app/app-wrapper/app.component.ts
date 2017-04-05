import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMenu: Boolean = false;
  
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
