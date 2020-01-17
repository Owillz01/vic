import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  contactForm = new FormGroup({
    name : new FormControl(),
    email : new FormControl('', Validators.required),
    subject : new FormControl('', Validators.required),
    message : new FormControl('', Validators.required),
  })
  ngOnInit() {
  }

  submit(data){
    console.log(data);
  }
}
