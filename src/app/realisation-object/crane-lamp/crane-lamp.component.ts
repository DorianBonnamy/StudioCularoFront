import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalCarouselComponent } from "../../modal-carousel/modal-carousel.component";

@Component({
  selector: 'app-crane-lamp',
  templateUrl: './crane-lamp.component.html',
  styleUrls: ['./crane-lamp.component.less']
})
export class CraneLampComponent implements OnInit {
  @ViewChild(ModalCarouselComponent, null) modal: ModalCarouselComponent;
  directory: string = 'assets/realisation/object/crane-lamp/';

  images: string[] = [
    this.directory + '1.jpg',
    this.directory + '2.jpg',
    this.directory + '3.jpg',
    this.directory + '4.jpg',
  ];

  constructor() {}

  ngOnInit() {}
}
