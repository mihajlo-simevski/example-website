import { Component } from '@angular/core';
import { NgbdModalComponent } from 'src/app/components/modal/modal.component';
import { NgbdTable } from 'src/app/components/table/table.component';

@Component({
  selector: 'about',
  standalone: true,
  imports: [NgbdModalComponent, NgbdTable],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor() {}
}
