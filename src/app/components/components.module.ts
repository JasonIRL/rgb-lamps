import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule } from '@nebular/theme';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [DashboardComponent, LoginComponent, SideMenuComponent],
  imports: [CommonModule, NbMenuModule],
  exports: [DashboardComponent, LoginComponent, SideMenuComponent],
})
export class ComponentsModule {}
