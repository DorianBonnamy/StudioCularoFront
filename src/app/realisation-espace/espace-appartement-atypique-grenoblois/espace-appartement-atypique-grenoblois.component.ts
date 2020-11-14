import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-appartement-atypique-grenoblois',
  templateUrl: './espace-appartement-atypique-grenoblois.component.html',
  styleUrls: ['./espace-appartement-atypique-grenoblois.component.less']
})
export class EspaceAppartementAtypiqueGrenobloisComponent implements OnInit {
  directory: string = 'assets/realisation/espace/appartement_atypique_grenoblois/';

  images: string[] = [
    this.directory + '1.jpg',
    this.directory + '2.jpg',
    this.directory + '3.jpg',
    this.directory + '4.jpg',
    this.directory + '5.jpg',
    this.directory + '6.jpg',
    this.directory + '7.jpg'
  ];

  constructor() {}

  ngOnInit() {}
}
