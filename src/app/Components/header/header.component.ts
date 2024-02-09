import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check if the screen is scrolled to the top
    if (window.scrollY === 0) {
      console.log('Scrolled to the top');
      // Perform actions when the screen is at the top
    } else {
      console.log(document.documentElement.querySelector("#Nav"))
      console.log('Not at the top');
      // Perform actions when the screen is not at the top
    }
  }
}
