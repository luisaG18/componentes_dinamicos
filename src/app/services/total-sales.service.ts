import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TotalSalesService {
  /**
   * Función para calcular el total de ventas por año
   * @returns El total de las ventas por año
   */
  getTotalSalesYear(): string {
    return 'El total de las ventas de este año son: 123.000';
  }

  /**
   * Función para calcular el total de ventas por mes
   * @returns El total de las ventas por mes
   */
  getTotalSalesMonth(): string {
    return 'El total de las ventas de este mes son: 10.000';
  }

  /**
   * Función para calcular el total de ventas por dia
   * @returns El total de las ventas por dia
   */
  getTotalSalesDay(): string {
    return 'El total de las ventas de este dia son: 300';
  }
}
