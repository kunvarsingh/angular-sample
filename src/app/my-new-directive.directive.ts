import { Directive,HostListener ,ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[appMyNewDirective]'
})
export class MyNewDirectiveDirective {

 @HostListener('click', ['$event'])
  confirmFirst(event: Event) {
    return window.confirm('Are you sure you want to do this?');
  }


  constructor(el: ElementRef, renderer: Renderer) {
 //renderer.setElementStyle(el.nativeElement, 'display', 'none');

   }
}
