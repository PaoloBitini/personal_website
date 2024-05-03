import { Component, Input } from '@angular/core';

import { BubbleService } from 'src/app/bubbles/bubble.service';

@Component({
  selector: 'web-logo-container',
  templateUrl: './logo-container.component.html',
  styleUrls: ['./logo-container.component.scss'],
})
export class LogoContainerComponent {
  constructor(public bubbleService: BubbleService) {}

  @Input() size: number = 1;
  @Input() showDetails = true;

  openBM() {
    this.bubbleService.openBubblesManager();
  }
}
