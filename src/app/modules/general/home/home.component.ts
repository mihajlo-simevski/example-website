import { Component } from '@angular/core';
import { NgbdCarousel } from 'src/app/components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbdCarousel],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}
}
