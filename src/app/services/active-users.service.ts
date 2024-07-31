import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiveUsersService {
  /**
   * Función para calcular el total de usuarios activos
   * @returns El total de usuarios activos
   */
  getTotalActiveUsers(): string {
    return 'El total de usuarios activos es: 500';
  }

  /**
   * Función para traer el total de usuarios activos hace más de un año
   * @returns El total de usuarios activos hace más de un año
   */
  getActiveUsersAYearAgo(): string {
    return 'El total de usuarios activos hace un año es: 350';
  }

  /**
   * Función para calcular el total de usuarios activos recientemente
   * @returns El total usuarios activos recientemente
   */
  getRecentlyActiveUsers(): string {
    return 'El total de usuarios activos recientemente es: 50';
  }
}
