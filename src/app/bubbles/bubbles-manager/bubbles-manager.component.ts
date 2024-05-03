import { Component, EventEmitter, Output } from '@angular/core';

import { BubbleService } from '../bubble.service';
import { BubbleWallData } from '../utils/bubble.utils';

@Component({
  selector: 'web-bubbles-manager',
  templateUrl: './bubbles-manager.component.html',
  styleUrls: ['./bubbles-manager.component.scss'],
})
export class BubblesManagerComponent {
  constructor(public bubbleService: BubbleService) {}
  public currentItem: BubbleWallData;
  public show = true;

  changeCurrentItem(id: string) {
    this.currentItem = this.bubbleService.bubbleWalls.get(id);
  }

  toggle() {
    this.show = !this.show;
  }

  close() {
    this.bubbleService.closeBubblesManager();
  }
}
