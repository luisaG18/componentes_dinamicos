import { Component } from '@angular/core';
import { TotalSalesService } from '../../services/total-sales.service';

@Component({
  selector: 'app-total-sales',
  standalone: true,
  imports: [],
  templateUrl: './total-sales.component.html',
  styleUrl: './total-sales.component.scss',
})
export class TotalSalesComponent {
  totalSalesYear: string = '';
  totalSalesMonth: string = '';
  totalSalesDay: string = '';

  constructor(private totalSalesService: TotalSalesService) {
    this.totalSalesYear = this.totalSalesService.getTotalSalesYear();
    this.totalSalesMonth = this.totalSalesService.getTotalSalesMonth();
    this.totalSalesDay = this.totalSalesService.getTotalSalesDay();
  }
}
