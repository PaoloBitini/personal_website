import { Component, Input } from '@angular/core';

import { DropdownMenuItemData } from 'src/app/pages/structure';

@Component({
  selector: 'web-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input() data: DropdownMenuItemData;
}
