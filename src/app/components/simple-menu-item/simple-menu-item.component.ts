import { Component, Input } from '@angular/core';

import { SimpleMenuItemData } from 'src/app/pages/structure';

@Component({
  selector: 'web-simple-menu-item',
  templateUrl: './simple-menu-item.component.html',
  styleUrls: ['./simple-menu-item.component.scss'],
})
export class SimpleMenuItemComponent {
  @Input() menuItemData: SimpleMenuItemData;
}
