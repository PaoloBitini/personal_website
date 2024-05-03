import { Component, Input } from '@angular/core';

@Component({
  selector: 'web-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss'],
})
export class BubbleComponent {
  @Input() color = '#ffffff4d';
  @Input() radius = 10;
}
