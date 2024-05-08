import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'web-blinds',
  templateUrl: './blinds.component.html',
  styleUrls: ['./blinds.component.scss'],
})
export class BlindsComponent implements OnInit {
  @Input() layout: 'vertical' | 'horizontal' = 'horizontal';
  @Input() open = true;
  @Input() set show(val: boolean) {
    this._show = val;
    if (!val) {
      this.open = true;
    }
  }
  public _show = true;

  direction: 'top' | 'bottom' | 'right' | 'left' = 'left';

  ngOnInit(): void {
    if (this.layout === 'vertical') {
      this.direction = 'top';
    }
  }

  handleClick() {
    this.open = !this.open;
    if (this.layout === 'horizontal') {
      this.direction === 'left'
        ? (this.direction = 'right')
        : (this.direction = 'left');
    } else {
      this.direction === 'bottom'
        ? (this.direction = 'top')
        : (this.direction = 'bottom');
    }
  }
}
