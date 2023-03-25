import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextstyle]',
})
export class TextstyleDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'red';
    this.el.nativeElement.style.fontWeight = '300';
  }
}
