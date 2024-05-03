import { BubbleWallData, BubbleWallOptions } from './utils/bubble.utils';

import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BubbleService {
  constructor() {}

  public isBubblesManagerOpen = false;

  public bubbleWallsChanges = new BehaviorSubject<string>('');
  public bubbleWalls: Map<string, BubbleWallData> = new Map();

  public registerBubbleWall(bubbleWallData: BubbleWallData) {
    this.bubbleWalls.set(bubbleWallData.id, bubbleWallData);
  }

  public changeData(id: string, options: BubbleWallOptions) {
    this.bubbleWalls.get(id).options = options;
    this.bubbleWallsChanges.next(id);
  }

  openBubblesManager() {
    this.isBubblesManagerOpen = true;
  }

  closeBubblesManager() {
    this.isBubblesManagerOpen = false;
  }
}
