import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  darkMode = false;
  darkModeEnabled=false;
  isLiked=false;
  constructor(private renderer: Renderer2) {}
  toggleMode() {
    this.darkModeEnabled = !this.darkModeEnabled;
    if (this.darkModeEnabled) {
      this.renderer.addClass(document.body, 'darkMode');
    } else {
      this.renderer.removeClass(document.body, 'darkMode');
    }
  }
  
  hart() {
    this.isLiked = !this.isLiked;
  }


  
}


