import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crane-lamp',
  templateUrl: './crane-lamp.component.html',
  styleUrls: ['./crane-lamp.component.less']
})
export class CraneLampComponent implements OnInit {
  directory: string = 'assets/realisation/object/crane-lamp/';

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
