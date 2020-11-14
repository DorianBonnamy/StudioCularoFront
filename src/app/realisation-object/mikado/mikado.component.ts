import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mikado',
  templateUrl: './mikado.component.html',
  styleUrls: ['./mikado.component.less']
})
export class MikadoComponent implements OnInit {
  directory: string = 'assets/realisation/object/mikado/';

  images: string[] = [
    this.directory + '1.jpg',
    this.directory + '2.jpg',
    this.directory + '3.jpg',
    this.directory + '4.jpg',
    this.directory + '5.jpg',
    this.directory + '6.png'
  ];

  constructor() {}

  ngOnInit() {}
}
