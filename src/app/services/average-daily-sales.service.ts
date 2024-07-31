import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AverageDailySalesService {
  /**
   * Función para calcular el promedio de ventas por dia
   * @returns El promedio de ventas por dia
   */
  getAverageSalesDay(): string {
    return 'El promedio de ventas por dia es: 300';
  }

  /**
   * Función para obtener el dia en el que se realizan más ventas
   * @returns El dia en el que se realizan más ventas
   */
  getDayMostSales(): string {
    return 'El dia en el que se realizan más ventas es: Sábado';
  }

  /**
   * Función para calcular el total de ventas en un dia
   * @returns El total de ventas en un dia
   */
  getTotalSalesDay(): string {
    return 'El total de ventas en un dia es: 280';
  }
}
