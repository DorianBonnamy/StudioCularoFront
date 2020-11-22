import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalCarouselComponent } from "../../modal-carousel/modal-carousel.component";
@Component({
  selector: 'app-espace-appartement-atypique-grenoblois',
  templateUrl: './espace-appartement-atypique-grenoblois.component.html',
  styleUrls: ['./espace-appartement-atypique-grenoblois.component.less']
})
export class EspaceAppartementAtypiqueGrenobloisComponent implements OnInit, AfterViewInit {
  @ViewChild(ModalCarouselComponent, null) child: ModalCarouselComponent;

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

  ngAfterViewInit(): void {
  }

  ngOnInit() {
  }

  

  
}
