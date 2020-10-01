import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { User } from './shared/services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private sidebarService: NbSidebarService,
    public auth: AuthService
  ) {}
  title = 'rgb-lamps';
  user$: Observable<User>;

  ngOnInit(): void {
    this.sidebarService.collapse('leftNav');
    this.user$ = this.auth.user$;
  }

  toggleSidebar(): void {
    this.sidebarService.toggle(false, 'leftNav');
  }
}
