import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  items: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'person',
    },
    {
      title: 'Devices',
      icon: 'bulb',
    },
    {
      title: 'About',
      icon: 'question-mark-circle',
    },
  ];
}
