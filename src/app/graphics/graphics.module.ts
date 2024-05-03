import { ChevronComponent } from './chevron/chevron.component';
import { CloseIconComponent } from './close-icon/close-icon.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReduceIconComponent } from './reduce-icon/reduce-icon.component';
import { SpreadIconComponent } from './spread-icon/spread-icon.component';

@NgModule({
  declarations: [
    ChevronComponent,
    SpreadIconComponent,
    ReduceIconComponent,
    CloseIconComponent,
  ],
  imports: [CommonModule],
  exports: [
    ChevronComponent,
    SpreadIconComponent,
    ReduceIconComponent,
    CloseIconComponent,
  ],
})
export class GraphicsModule {}
