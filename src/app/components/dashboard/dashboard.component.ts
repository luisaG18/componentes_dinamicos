import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ComponentRef, ElementRef, Input, OnChanges, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { TotalSalesComponent } from '../total-sales/total-sales.component';
import { ActiveUsersComponent } from '../active-users/active-users.component';
import { SalesTodayComponent } from '../sales-today/sales-today.component';
import { ResourcesUsedComponent } from '../resources-used/resources-used.component';
import { AverageDailySalesComponent } from '../average-daily-sales/average-daily-sales.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TotalSalesComponent, ActiveUsersComponent, SalesTodayComponent, ResourcesUsedComponent, AverageDailySalesComponent, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements AfterViewInit, OnInit {
  // Elemento sectionWidgets
  @ViewChild('sectionWidgets') sectionWidgets!: ElementRef;
  // Objeto con las opciones de widgets, para controlar cuando se verán
  objectOptionsWidgets: any = {
    'Total de ventas': false,
    'Usuarios activos': false,
    'Ventas de hoy': false,
    'Recursos utilizados': false,
    'Promedio de ventas por dia': false,
  };

  /**
   * Función para obtener las llaves del objeto objectOptionsWidgets
   * @returns Retorna el arreglo con las keys del objeto
   */
  getKeys() {
    return Object.keys(this.objectOptionsWidgets);
  }

  /**
   * Función constructor
   * @param vcr Referencia a el contendor
   */
  constructor(private vcr: ViewContainerRef, private renderer: Renderer2) {}

  // Creamos las variables para la ref de los contenedores que
  // guardaran los componentes
  totalSalesComponent!: ComponentRef<TotalSalesComponent>;
  activeUsersComponent!: ComponentRef<ActiveUsersComponent>;
  salesTodayComponent!: ComponentRef<SalesTodayComponent>;
  resourcesUsedComponent!: ComponentRef<ResourcesUsedComponent>;
  averageDailySalesComponent!: ComponentRef<AverageDailySalesComponent>;

  /**
   * Función que se ejecuta al inicializarse el componente
   */
  ngOnInit(): void {
    // Obtenemos los datos que hayan en el localstorage
    this.getLocalStorage();
  }
  /**
   * Función que se ejecuta despues de cargar las vistas del elemento
   */
  ngAfterViewInit(): void {
    // Agregamos los widgets que esten en el localStorage
    this.addDefaultWidgets();
  }

  /**
   * Funci´´on para agregar los widgets que esten en el localStorage
   */
  addDefaultWidgets() {
    // Le asignamos a la variable keys, el arreglo con las keys del objeto
    const arrayKeys = this.getKeys();
    // Recorremos el arreglo de arrayKeys
    for (let key of arrayKeys) {
      // Validamos si el widget está en true para agregarlo
      if (this.objectOptionsWidgets[key] === true) {
        // Llamamos la función que agrega los widgets
        //? Acá podria llamar directamente al addWidget?
        this.onChangeCheckbox(true, key);
      }
    }
  }

  /**
   * Función para agregar los widgets al localStorage
   */
  setLocalStorage() {
    localStorage.setItem('optionsWidgets', JSON.stringify(this.objectOptionsWidgets));
  }

  /**
   * Función para obtener los widgets que estén en el localstorage
   */
  getLocalStorage() {
    const data = localStorage.getItem('optionsWidgets');
    // Validamos si hay algún dato
    if (data) {
      // Le pasamos los datos al objeto optionWidgets
      this.objectOptionsWidgets = JSON.parse(data);
    }
  }
  /**
   * Función que se ejecuta al hacer click en el checkbox
   * @param option Variable de la opción seleccionada
   * @returns
   */
  onChangeCheckbox(event: boolean, option: string) {
    this.setLocalStorage();
    const isChecked = event;
    if (isChecked) {
      this.addWidget(option);
    } else {
      this.removeWidget(option);
    }
  }

  /**
   * Función para agregar los widgets
   * @param option Variable de la opción
   * @returns
   */
  addWidget(option: string) {
    switch (option) {
      case 'Total de ventas':
        this.totalSalesComponent = this.vcr.createComponent(TotalSalesComponent);
        this.renderer.appendChild(this.sectionWidgets.nativeElement, this.totalSalesComponent.location.nativeElement);
        break;
      case 'Usuarios activos':
        this.activeUsersComponent = this.vcr.createComponent(ActiveUsersComponent);
        this.renderer.appendChild(this.sectionWidgets.nativeElement, this.activeUsersComponent.location.nativeElement);
        break;
      case 'Ventas de hoy':
        this.salesTodayComponent = this.vcr.createComponent(SalesTodayComponent);
        this.renderer.appendChild(this.sectionWidgets.nativeElement, this.salesTodayComponent.location.nativeElement);
        break;
      case 'Recursos utilizados':
        this.resourcesUsedComponent = this.vcr.createComponent(ResourcesUsedComponent);
        this.renderer.appendChild(this.sectionWidgets.nativeElement, this.resourcesUsedComponent.location.nativeElement);
        break;
      case 'Promedio de ventas por dia':
        this.averageDailySalesComponent = this.vcr.createComponent(AverageDailySalesComponent);
        this.renderer.appendChild(this.sectionWidgets.nativeElement, this.averageDailySalesComponent.location.nativeElement);
        break;
      default:
        return;
    }
  }

  /**
   * Función para eliminar los widgets
   */
  removeWidget(option: string) {
    switch (option) {
      case 'Total de ventas':
        this.totalSalesComponent.destroy();
        break;
      case 'Usuarios activos':
        this.activeUsersComponent.destroy();
        break;
      case 'Ventas de hoy':
        this.salesTodayComponent.destroy();
        break;
      case 'Recursos utilizados':
        this.resourcesUsedComponent.destroy();
        break;
      case 'Promedio de ventas por dia':
        this.averageDailySalesComponent.destroy();
        break;
      default:
        return;
    }
  }
}
