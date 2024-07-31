import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SalesTodayService {
  /**
   * Función para calcular el total de ventas de hoy
   * @returns El total de ventas de hoy
   */
  getTotalSalesToday(): string {
    return 'El total de ventas de hoy es: 2.000';
  }

  /**
   * Función para saber cual es el producto más vendido hoy
   * @returns El producto más vendido hoy
   */
  getBestSellingProduct(): string {
    return 'El producto más vendido hoy es: Celular Samsung';
  }

  /**
   * Función para obtener el top 3 de productos más vendidos hoy
   * @returns El top 3 de productos más vendidos hoy
   */
  getTopBestSellingProduct(): string {
    return 'El top 3 de productos más vendidos es: Celular Samsung, Celular Realme, Celular Oppo';
  }
}
