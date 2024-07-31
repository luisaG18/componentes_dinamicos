import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ejercicio_componentes_dinamicos';
  arrayWidgetsOptions: string[] = [
    'Total de ventas',
    'Usuarios activos',
    'Ventas de hoy',
    'Recursos utilizados',
    'Promedio de ventas por dia',
  ];
}
