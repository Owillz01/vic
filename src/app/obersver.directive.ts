import { Directive, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

@Directive({
  selector: '[appObersver]'
})
export class ObersverDirective {

  constructor() { }

  // @ViewChildren("more") _more : QueryList<any>
  //
  // ngAfterViewInit(){
  //   console.log(this._more)
  // }

}
