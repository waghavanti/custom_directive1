import { Directive, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private obj: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.obj.nativeElement.style.color= 'green';
  }

  // Listen for mouseleave event and change background to red
  @HostListener('mouseleave') onMouseLeave() {
    this.obj.nativeElement.style.color = 'black';
  }

}
