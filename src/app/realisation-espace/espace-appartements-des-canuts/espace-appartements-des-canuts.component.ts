import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-appartements-des-canuts',
  templateUrl: './espace-appartements-des-canuts.component.html',
  styleUrls: ['./espace-appartements-des-canuts.component.less']
})
export class EspaceAppartementsDesCanutsComponent implements OnInit {
  directory: string = 'assets/realisation/espace/appartement_des_canuts/';

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
