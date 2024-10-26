import { Component } from '@angular/core';

import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ChartComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

}
