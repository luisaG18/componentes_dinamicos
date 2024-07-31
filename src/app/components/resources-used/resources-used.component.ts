import { Component } from '@angular/core';
import { ResourcesUsedService } from '../../services/resources-used.service';

@Component({
  selector: 'app-resources-used',
  standalone: true,
  imports: [],
  templateUrl: './resources-used.component.html',
  styleUrl: './resources-used.component.scss',
})
export class ResourcesUsedComponent {
  totalResourcesUsed: string = '';
  totalUnusedResources: string = '';
  mostUsedResource: string = '';

  constructor(private resourcesUsedService: ResourcesUsedService) {
    this.totalResourcesUsed = this.resourcesUsedService.getTotalResourcesUsed();
    this.totalUnusedResources = this.resourcesUsedService.getTotalUnusedResources();
    this.mostUsedResource = this.resourcesUsedService.getMostUsedResource();
  }
}
