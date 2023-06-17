import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slides = [
    { imageUrl: 'path-to-image-1.jpg' },
    { imageUrl: 'path-to-image-2.jpg' },
    { imageUrl: 'path-to-image-3.jpg' }
  ];

  carouselConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
    // Add more configuration options as per your requirement
  };

}
