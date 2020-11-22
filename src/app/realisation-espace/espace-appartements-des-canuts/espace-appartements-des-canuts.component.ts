import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalCarouselComponent } from '../../modal-carousel/modal-carousel.component';

@Component({
  selector: 'app-espace-appartements-des-canuts',
  templateUrl: './espace-appartements-des-canuts.component.html',
  styleUrls: ['./espace-appartements-des-canuts.component.less']
})
export class EspaceAppartementsDesCanutsComponent implements OnInit {
  @ViewChild(ModalCarouselComponent, null) child: ModalCarouselComponent;
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
