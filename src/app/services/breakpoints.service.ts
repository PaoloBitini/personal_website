import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreakpointsService {
  constructor() {}

  public readonly XSMALL_BP = 320;
  public readonly SMALL_BP = 576;
  public readonly MEDIUM_BP = 768;
  public readonly LARGE_BP = 1024;
  public readonly XLARGE_BP = 1200;

  public isXSmall(): boolean {
    return window.innerWidth <= this.XSMALL_BP;
  }

  public isSmall(): boolean {
    return window.innerWidth <= this.SMALL_BP;
  }

  public isMedium(): boolean {
    return window.innerWidth <= this.MEDIUM_BP;
  }

  public isLarge(): boolean {
    return window.innerWidth <= this.LARGE_BP;
  }

  public isXLarge(): boolean {
    return window.innerWidth <= this.XLARGE_BP;
  }

  public isXXXLarge(): boolean {
    return window.innerWidth > this.XLARGE_BP;
  }
}
