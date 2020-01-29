import { Component, OnInit } from '@angular/core';
// import {ngBoostrap}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

public isNavbarCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
