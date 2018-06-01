import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})

export class Assignment2Component implements OnInit {
  username: string;
  private btnStatus: boolean;

  constructor() { }

  ngOnInit() {
    this.username = 'zachary';
    this.btnStatus = true;

  }

}
