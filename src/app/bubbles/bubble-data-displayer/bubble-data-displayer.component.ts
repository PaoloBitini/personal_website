import { BubbleWallData, BubbleWallOptions } from '../utils/bubble.utils';
import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

import { BubbleService } from '../bubble.service';

@Component({
  selector: 'web-bubble-data-displayer',
  templateUrl: './bubble-data-displayer.component.html',
  styleUrls: ['./bubble-data-displayer.component.scss'],
})
export class BubbleDataDisplayerComponent implements OnInit {
  @Input() data: BubbleWallData;

  form: FormGroup;
  Object = Object;

  constructor(private fb: FormBuilder, private bubbleService: BubbleService) {}

  ngOnInit(): void {
    this.form = this.fb.group<BubbleWallOptions>(this.data.options);
  }

  changeProp() {
    this.bubbleService.changeData(
      this.data?.id,
      this.form.value as BubbleWallOptions
    );
  }
}
