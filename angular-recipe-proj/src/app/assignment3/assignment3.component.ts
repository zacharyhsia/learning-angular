import { Component, OnInit } from '@angular/core';
const CLICK_LOG = 'click button';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})

export class Assignment3Component implements OnInit {
  

  buttonName = 'Show';
  paragraph = '';
  logs: string[] = [];




  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.paragraph = this.paragraph === '' ? 'top secretes' : '';
    this.buttonName = this.paragraph === '' ? 'Show' : 'Hide';
    this.logs.push(CLICK_LOG);
  }


  getColor() {
    if (this.logs.length <= 5) {
      return 'white';
    } else {
      return 'green'
    }
  }
}
