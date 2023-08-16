import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FakeStoreService } from '../../services/fake-store.service';

@Component({
  selector: 'ngbd-carousel',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, NgIf, NgFor],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig],
})
export class NgbdCarousel {
  products: any[] = [];
  productsInCart: any[] = [];

  addItem(item: any) {
    this.productsInCart.push(item);
  }

  showNavigationArrows = true;
  showNavigationIndicators = false;

  constructor(
    config: NgbCarouselConfig,
    private fakeStoreService: FakeStoreService
  ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.fakeStoreService.getProducts().subscribe((data: any[]) => {
      this.products = data.map(product => product);
      this.products.forEach(product => {
        product.discountedPrice = product.price * 0.5;
      });
    });
  }
}
