import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResourcesUsedService {
  /**
   * Función el total de recursos utilizados
   * @returns El total de recursos utilizados
   */
  getTotalResourcesUsed(): string {
    return 'El total de recursos utilizados es: 10';
  }

  /**
   * Función para calcular el total de recursos sin utilizar
   * @returns El total de recursos sin utilizar
   */
  getTotalUnusedResources(): string {
    return 'El total de recursos sin utilizar: 5';
  }

  /**
   * Función para saber el recurso más utilizado
   * @returns El recurso más utilizado
   */
  getMostUsedResource(): string {
    return 'El recurso más utilizado es: CPU';
  }
}
