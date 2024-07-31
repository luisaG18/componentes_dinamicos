import { Component } from '@angular/core';
import { ActiveUsersService } from '../../services/active-users.service';

@Component({
  selector: 'app-active-users',
  standalone: true,
  imports: [],
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.scss',
})
export class ActiveUsersComponent {
  totalActiveUsers: string = '';
  totalActiveUsersAYearAgo: string = '';
  totalRecentlyActiveUsers: string = '';

  constructor(private activeUsersService: ActiveUsersService) {
    this.totalActiveUsers = this.activeUsersService.getTotalActiveUsers();
    this.totalActiveUsersAYearAgo = this.activeUsersService.getActiveUsersAYearAgo();
    this.totalRecentlyActiveUsers = this.activeUsersService.getRecentlyActiveUsers();
  }
}
