import { Component, HostListener, OnInit } from '@angular/core';

import { BubbleService } from 'src/app/bubbles/bubble.service';
import { Router } from '@angular/router';

@Component({
  selector: 'web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public bubbleService: BubbleService, public router: Router) {}
  layout: 'vertical' | 'horizontal' = 'horizontal';

  ngOnInit(): void {
    this.resize();
  }

  @HostListener('window:resize', ['$event'])
  resize() {
    this.layout = this.isMobile() ? 'vertical' : 'horizontal';
  }

  isMobile(): boolean {
    return window.innerWidth <= 576;
  }
}
