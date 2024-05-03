import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[webClickOutside]',
})
export class ClickOutsideDirective {
  constructor(private elementRef: ElementRef) {}

  @Output() clickOutside = new EventEmitter<MouseEvent>();

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
}
