import { Component } from '@angular/core';
import { SalesTodayService } from '../../services/sales-today.service';

@Component({
  selector: 'app-sales-today',
  standalone: true,
  imports: [],
  templateUrl: './sales-today.component.html',
  styleUrl: './sales-today.component.scss',
})
export class SalesTodayComponent {
  totalSalesToday: string = '';
  bestSellingProduct: string = '';
  topBestSellingProduct: string = '';

  constructor(private salesTodayService: SalesTodayService) {
    this.totalSalesToday = this.salesTodayService.getTotalSalesToday();
    this.bestSellingProduct = this.salesTodayService.getBestSellingProduct();
    this.topBestSellingProduct = this.salesTodayService.getTopBestSellingProduct();
  }
}
