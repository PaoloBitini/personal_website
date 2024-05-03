import { Component, Input } from '@angular/core';

@Component({
  selector: 'web-chevron',
  templateUrl: './chevron.component.html',
  styleUrls: ['./chevron.component.scss'],
})
export class ChevronComponent {
  _direction = 'bottom';

  @Input() set direction(value: 'top' | 'bottom' | 'right' | 'left') {
    this._direction = value;
  }
}
