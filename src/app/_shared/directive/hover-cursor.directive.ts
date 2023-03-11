import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appHoverCursor]',
})
export class HoverCursorDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.cursor = 'auto';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.cursor = 'auto';
  }
}
