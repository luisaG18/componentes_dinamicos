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
  // Objeto con las opciones de widgets
  // para controlar cuando se verán y en que posición
  objectOptionsWidget: any = {
    'Total de ventas': {
      isChecked: false,
      order: 0,
    },
    'Usuarios activos': {
      isChecked: false,
      order: 0,
    },
    'Ventas de hoy': {
      isChecked: false,
      order: 0,
    },
    'Recursos utilizados': {
      isChecked: false,
      order: 0,
    },
    'Promedio de ventas por dia': {
      isChecked: false,
      order: 0,
    },
  };

  /**
   * Función para obtener las llaves del objeto objectOptionsWidget
   * @returns Retorna el arreglo con las keys del objeto
   */
  getKeys() {
    return Object.keys(this.objectOptionsWidget);
  }

  /**
   * Función constructor
   * @param vcr Referencia a el contendor
   */
  constructor(private vcr: ViewContainerRef, private renderer: Renderer2) {}

  // Creamos las variables para la ref de los contenedores que
  // guardaran los componentes
  containerTotalSalesComponent!: ComponentRef<TotalSalesComponent>;
  containerActiveUsersComponent!: ComponentRef<ActiveUsersComponent>;
  containerSalesTodayComponent!: ComponentRef<SalesTodayComponent>;
  containerResourcesUsedComponent!: ComponentRef<ResourcesUsedComponent>;
  containerAverageDailySalesComponent!: ComponentRef<AverageDailySalesComponent>;

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
    this.addActiveWidgets();
  }

  /**
   * Función para agregar los widgets que esten en el localStorage
   */
  addActiveWidgets() {
    // Variable para almacenar el objeto con la estructura de el order como key
    const newObject: any = {};
    // Recorremos las keys del objeto OptionWidget
    Object.keys(this.objectOptionsWidget).forEach((key) => {
      // Validamos si la option esta checked
      if (this.objectOptionsWidget[key].isChecked) {
        // Creamos el objeto con el order como key
        newObject[this.objectOptionsWidget[key].order] = {
          name: key,
          isChecked: true,
          order: this.objectOptionsWidget[key].order,
        };
      }
    });
    // Creamos una variable para almacenar las keys del nuevo objeto ordenadas
    const arraySortedOptions = Object.keys(newObject).sort((a: string, b: string) => Number(a) - Number(b));
    // Recorremos el array de las opciones ordenadas
    arraySortedOptions.forEach((order) => {
      // Llamamos la función que agrega el widget y le mandamos la opción
      this.addWidget(newObject[order].name);
    });
  }

  /**
   * Función para agregar los widgets al localStorage
   */
  setLocalStorage() {
    localStorage.setItem('optionsWidgets', JSON.stringify(this.objectOptionsWidget));
  }

  /**
   * Función para obtener los widgets que estén en el localstorage
   */
  getLocalStorage() {
    const data = localStorage.getItem('optionsWidgets');
    // Validamos si hay algún dato
    if (data) {
      // Le pasamos los datos al objeto optionWidget
      this.objectOptionsWidget = JSON.parse(data);
    }
  }

  /**
   * Función que se ejecuta al hacer click en el checkbox
   * @param option Variable de la opción seleccionada
   * @returns
   */
  onChangeCheckbox(event: boolean, option: string) {
    // Le asignamos a la variable isChecked el valor que se recibe del evento
    const isChecked: boolean = event;
    // Validamos si el check esta checked
    if (isChecked) {
      // Llamamos la función que agrega el widget
      this.addWidget(option);
    } else {
      // Llamamos la función que remueve el widget
      this.removeWidget(option);
    }
    // Llamamos la función que nos guarda el objeto en el localStorage
    this.setLocalStorage();
  }

  /**
   * Función para agregar los widgets
   * @param option Variable de la opción
   * @returns
   */
  addWidget(option: string) {
    // Asignamos la cantidad de hijos que tiene el componente padre
    const amount = this.sectionWidgets.nativeElement.childNodes.length;
    // Le asignamos esa cantidad a la propiedad order del objeto optionWidget
    this.objectOptionsWidget[option].order = amount;
    // Hacemos el switch para agregar el widget
    switch (option) {
      // Caso cuando la opción es Total de ventas
      case 'Total de ventas':
        // Le asignamos al container del componente el componente que se crea
        this.containerTotalSalesComponent = this.vcr.createComponent(TotalSalesComponent);
        // Le agregamos al componente padre el neuvo componente creado
        this.appendChild(this.containerTotalSalesComponent);
        // Detectamos los cambios que hay en el componente
        this.detectChangeComponent(this.containerTotalSalesComponent);
        /* this.containerTotalSalesComponent.location.nativeElement.addEventListener('click', () => {
          console.log('click');
        }); */
        break;
      // Caso cuando la opción es Usuarios activos
      case 'Usuarios activos':
        // Le asignamos al container del componente el componente que se crea
        this.containerActiveUsersComponent = this.vcr.createComponent(ActiveUsersComponent);
        // Le agregamos al componente padre el neuvo componente creado
        this.appendChild(this.containerActiveUsersComponent);
        // Detectamos los cambios que hay en el componente
        this.detectChangeComponent(this.containerActiveUsersComponent);
        break;
      // Caso cuando la opción es Ventas de hoy
      case 'Ventas de hoy':
        // Le asignamos al container del componente el componente que se crea
        this.containerSalesTodayComponent = this.vcr.createComponent(SalesTodayComponent);
        // Le agregamos al componente padre el nuevo componente creado
        this.appendChild(this.containerSalesTodayComponent);
        // Detectamos los cambios que hay en el componente
        this.detectChangeComponent(this.containerSalesTodayComponent);
        break;
      // Caso cuando la opción es Recursos utilizados
      case 'Recursos utilizados':
        // Le asignamos al container del componente el componente que se crea
        this.containerResourcesUsedComponent = this.vcr.createComponent(ResourcesUsedComponent);
        // Le agregamos al componente padre el nuevo componente creado
        this.appendChild(this.containerResourcesUsedComponent);
        // Detectamos los cambios que hay en el componente
        this.detectChangeComponent(this.containerResourcesUsedComponent);
        break;
      // Caso cuando la opción es Promedio de ventas por dia
      case 'Promedio de ventas por dia':
        // Le asignamos al container del componente el componente que se crea
        this.containerAverageDailySalesComponent = this.vcr.createComponent(AverageDailySalesComponent);
        // Le agregamos al componente padre el nuevo componente creado
        this.appendChild(this.containerAverageDailySalesComponent);
        // Detectamos los cambios que hay en el componente
        this.detectChangeComponent(this.containerAverageDailySalesComponent);
        break;
      default:
        return;
    }
  }

  /**
   * Función para eliminar los widgets
   */
  removeWidget(option: string) {
    // Hacemos el switch para agregar el widget
    switch (option) {
      // Caso cuando la opción es Total de ventas
      case 'Total de ventas':
        // Eliminamos el container que contiene el componente
        this.containerTotalSalesComponent.destroy();
        break;
      // Caso cuando la opción es Usuarios activos
      case 'Usuarios activos':
        // Eliminamos el container que contiene el componente
        this.containerActiveUsersComponent.destroy();
        break;
      // Caso cuando la opción es Ventas de hoy
      case 'Ventas de hoy':
        // Eliminamos el container que contiene el componente
        this.containerSalesTodayComponent.destroy();
        break;
      // Caso cuando la opción es Recursos utilizados
      case 'Recursos utilizados':
        // Eliminamos el container que contiene el componente
        this.containerResourcesUsedComponent.destroy();
        break;
      // Caso cuando la opción es Promedio de ventas por dia
      case 'Promedio de ventas por dia':
        // Eliminamos el container que contiene el componente
        this.containerAverageDailySalesComponent.destroy();
        break;
      default:
        return;
    }
  }

  /**
   * Función para aagregar un hijo a un el elemento sectionWidgets
   * @param containerComponent Variable del contenedor que tiene el componente
   */
  appendChild(containerComponent: any) {
    this.renderer.appendChild(this.sectionWidgets.nativeElement, containerComponent.location.nativeElement);
  }

  /**
   * Función para detectar un cambio en el componente
   * @param containerComponent Variable del contenedor que tiene el componente
   */
  detectChangeComponent(containerComponent: any) {
    containerComponent.changeDetectorRef.detectChanges();
  }
}
