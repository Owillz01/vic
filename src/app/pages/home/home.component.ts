import { Component, AfterViewInit, OnInit, OnDestroy, ViewChildren,ViewChild, QueryList, ElementRef } from '@angular/core';
import { FormGroup, FormControl, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {

  // const config = {
  //   threshold: [0.5]
  // }
  constructor() { }
public _observer : IntersectionObserver;
  // @ViewChildren("more") _more : QueryList<any>
  form = new FormGroup({
    bizType : new FormControl(),
    email : new FormControl('', Validators.required)
  })

  @ViewChildren('observed') observed : QueryList<any>;

ngOnInit() : void{
  // this._observer = new IntersectionObserver((entries) => {
  //
  //   entries.forEach(entry =>{
  //     // if(entry.isIntersecting){
  //
  //     if(entry.isIntersecting){
  //       console.log(entry.target.dataset.name, entry.isIntersecting);
  //
  //       entry.target.classList.add('animated')
  //       entry.target.style.visibility = "visible";
  //     }else{entry.target.classList.remove('animated')}
  //   })
  //
  //   // console.log('more is in view', entries)
  // })
}

// @ViewChild('observed') observed : ElementRef;

ngAfterViewInit() : void{

  this._observer = new IntersectionObserver((entries)  => {

    (entries).forEach((entry) =>{
      // if(entry.isIntersecting){

      if(entry.isIntersecting){
        console.log(entry );

        entry.target.classList.add('animated')
        // console.log(entry.target.style.visibility)
        entry.target['style'].visibility = "visible";
      }else{entry.target.classList.remove('animated')}
    })

    // console.log('more is in view', entries)
  })

  // console.log('this is it',this.obseved.toArray());


  const observed = this.observed.toArray()
  observed.forEach(element => this._observer.observe(element.nativeElement ))
  // console.log(this.observed.toArray());

  // this._observer.observe(this.observed.nativeElement )

}

ngOnDestroy() :void{
  this._observer.disconnect();
}
  getTips(value){
    console.log(value);
  }
}
