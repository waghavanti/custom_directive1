import { Directive, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';


@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {


  constructor(private obj: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.obj.nativeElement.style.color= 'red';
  }

  // Listen for mouseleave event and change background to red
  @HostListener('mouseleave') onMouseLeave() {
    this.obj.nativeElement.style.color = 'black';
  }

}



