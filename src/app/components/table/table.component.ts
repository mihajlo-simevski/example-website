import { DecimalPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Country {
  name: string;
  flag: string;
  copies: number;
  revenue: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    copies: 17075200,
    revenue: 146989754,
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    copies: 9976140,
    revenue: 36624199,
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    copies: 9629091,
    revenue: 324459463,
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    copies: 9596960,
    revenue: 1409517397,
  },
];

@Component({
  selector: 'ngbd-table',
  standalone: true,
  imports: [NgFor, DecimalPipe],
  templateUrl: './table.component.html',
})
export class NgbdTable {
  countries = COUNTRIES;
}
