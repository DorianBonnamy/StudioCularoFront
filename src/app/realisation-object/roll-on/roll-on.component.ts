import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roll-on',
  templateUrl: './roll-on.component.html',
  styleUrls: ['./roll-on.component.less']
})
export class RollOnComponent implements OnInit {
  directory: string = 'assets/realisation/object/roll-on/';

  images: string[] = [
    this.directory + '1.jpg',
    this.directory + '2.jpg',
    this.directory + '3.jpg',
    this.directory + '4.jpg',
    this.directory + '5.jpg'
  ];

  constructor() {}

  ngOnInit() {}
}
