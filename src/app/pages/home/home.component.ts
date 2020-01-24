import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  // @ViewChildren("more") _more : QueryList<any>
  form = new FormGroup({
    bizType : new FormControl(),
    email : new FormControl('', Validators.required)
  })


  getTips(value){
    console.log(value);
  }
  //
  // ngAfterViewInit(){
  //   let observer = new IntersectionObserver(entries =>{
  //     console.log(entries)
  //   })
  //
  //   observer.observe(this._more)
  // }
}
