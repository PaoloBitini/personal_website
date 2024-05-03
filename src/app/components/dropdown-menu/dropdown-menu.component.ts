import { Component, Input } from '@angular/core';

import { SimpleMenuItemData } from 'src/app/pages/structure';

@Component({
  selector: 'web-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent {
  @Input() dropdownItems: SimpleMenuItemData[];
}
