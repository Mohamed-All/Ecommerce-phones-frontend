import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [RouterLink,FormsModule, RouterOutlet],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'] // تم تصحيح styleUrl إلى styleUrls
})
export class ChartComponent {
  quantity: number = 1; // الحالة الافتراضية للكمية

  changeQuantity(delta: number): void {
    this.quantity += delta;

    // Ensure the quantity doesn't go below 1
    if (this.quantity < 1) {
      this.quantity = 1;
    }
  }
}
