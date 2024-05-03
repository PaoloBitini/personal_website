import { BubbleService } from 'src/app/bubbles/bubble.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public bubbleService: BubbleService, public router: Router) {}
}
