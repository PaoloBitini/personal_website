import { DropdownMenuItemData, structure } from 'src/app/pages/structure';

import { Component } from '@angular/core';

@Component({
  selector: 'web-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  itemList: DropdownMenuItemData[] = structure;
}
