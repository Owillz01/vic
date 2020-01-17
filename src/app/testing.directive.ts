import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTesting]'
})
export class TestingDirective {

  // constructor() { }

  @HostBinding('style.color') color : string;
  @HostBinding('style.background') bg_color : string;

  font_color = ['red', 'blue', 'yellow'];
  bg = ['black', 'white', 'red'];

  @HostListener('click') onClick(){
    let index = Math.floor(Math.random() * this.bg.length)
    this.color = this.font_color[index];
    this.bg_color = this.bg[index];
    
  }

}
