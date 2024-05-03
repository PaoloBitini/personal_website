import { Component, Input, OnInit, Optional } from '@angular/core';
import { v4 } from 'uuid';

import {
  BubbleData,
  BubbleUtils,
  BubbleWallData,
  BubbleWallOptions,
} from 'src/app/bubbles/utils/bubble.utils';
import { BubbleService } from 'src/app/bubbles/bubble.service';

@Component({
  selector: 'web-bubble-wall',
  templateUrl: './bubble-wall.component.html',
  styleUrls: ['./bubble-wall.component.scss'],
})
export class BubbleWallComponent implements OnInit {
  @Input() set options(opt: BubbleWallOptions) {
    this.data.options = BubbleUtils.getFixedBubbleWallOptions(opt);
  }
  get options() {
    return this.data.options;
  }

  private data: BubbleWallData;

  public bubblesArray: BubbleData[];

  constructor(@Optional() private bubbleService: BubbleService) {
    this.data = {
      id: v4(),
      options: BubbleUtils.getFixedBubbleWallOptions({}),
    };
  }

  ngOnInit() {
    this.bubbleService?.registerBubbleWall(this.data);
    this.prepareBubbles();
    this.bubbleService?.bubbleWallsChanges.subscribe({
      next: (value: string) => {
        if (value === this.data.id) {
          this.prepareBubbles();
        }
      },
    });
  }

  prepareBubbles() {
    this.bubblesArray = [];
    for (let i = 0; i < this.options.bubbles; i++) {
      this.bubblesArray.push(BubbleUtils.generateBubbleData(this.options));
    }
  }
}
