import { Component } from '@angular/core';
import { NgbdModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'about',
  standalone: true,
  imports: [NgbdModalComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor() {}
}
