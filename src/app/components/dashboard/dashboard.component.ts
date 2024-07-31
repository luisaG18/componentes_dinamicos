import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { TotalSalesComponent } from '../total-sales/total-sales.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TotalSalesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements AfterViewInit {
  // Parametro de entrada de las opciones de widgets
  @Input() arrayWidgetsOptions: string[] = [];

  /**
   *
   * @param vcr Referencia a el contendor
   */
  constructor(private vcr: ViewContainerRef) {}

  /**
   * Función que se ejecuta despues de cargar las vistas del elemento
   */
  ngAfterViewInit(): void {}

  onClickInput(option: string) {
    if (option == 'Total de ventas') {
      var totalSalesComponent = this.vcr.createComponent(TotalSalesComponent);
    } else if (option == 'Usuarios activos') {
      console.log('usuarios');
    }
  }
}
