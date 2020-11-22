import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  constructor() {}

  directory: string = 'assets/home/';

  images: string[] = [

    this.directory + '1.jpg',
    this.directory + '2.jpg',
    this.directory + '3.jpg'
  ];

  ngOnInit() {}
}
