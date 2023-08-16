import { Component } from '@angular/core';
import { NgbdCarousel } from 'src/app/components/carousel/carousel.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbdCarousel, AboutComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}
}
