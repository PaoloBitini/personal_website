import { Component, HostListener, OnInit } from '@angular/core';

import { BreakpointsService } from 'src/app/services/breakpoints.service';
import { BubbleService } from 'src/app/bubbles/bubble.service';
import { Router } from '@angular/router';

@Component({
  selector: 'web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public bubbleService: BubbleService,
    public bpService: BreakpointsService,
    public router: Router
  ) {}
  layout: 'vertical' | 'horizontal' = 'horizontal';
  isSmall = false;
  ngOnInit(): void {
    this.resize();
  }

  @HostListener('window:resize', ['$event'])
  resize() {
    this.isSmall = this.bpService.isSmall();
  }
}
