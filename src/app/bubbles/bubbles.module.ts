import { BubbleComponent } from './bubble/bubble.component';
import { BubbleDataDisplayerComponent } from './bubble-data-displayer/bubble-data-displayer.component';
import { BubbleWallComponent } from './bubble-wall/bubble-wall.component';
import { BubblesManagerComponent } from './bubbles-manager/bubbles-manager.component';
import { CommonModule } from '@angular/common';
import { GraphicsModule } from '../graphics/graphics.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BubbleComponent,
    BubbleWallComponent,
    BubblesManagerComponent,
    BubbleDataDisplayerComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, GraphicsModule],
  exports: [BubbleComponent, BubbleWallComponent, BubblesManagerComponent],
})
export class BubblesModule {}
