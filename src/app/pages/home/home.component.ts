import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    bizType : new FormControl(),
    email : new FormControl('', Validators.required)
  })
  ngOnInit() {
  }

  getTips(value){
    console.log(value);
  }
}
