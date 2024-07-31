import { Component } from '@angular/core';
import { AverageDailySalesService } from '../../services/average-daily-sales.service';

@Component({
  selector: 'app-average-daily-sales',
  standalone: true,
  imports: [],
  templateUrl: './average-daily-sales.component.html',
  styleUrl: './average-daily-sales.component.scss',
})
export class AverageDailySalesComponent {
  averageSalesDay: string = '';
  dayMostSales: string = '';
  totalSalesDay: string = '';

  constructor(private averageDailySalesService: AverageDailySalesService) {
    this.averageSalesDay = this.averageDailySalesService.getAverageSalesDay();
    this.dayMostSales = this.averageDailySalesService.getDayMostSales();
    this.totalSalesDay = this.averageDailySalesService.getTotalSalesDay();
  }
}
