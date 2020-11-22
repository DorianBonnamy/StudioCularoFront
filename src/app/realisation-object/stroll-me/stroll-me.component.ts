import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalCarouselComponent } from "../../modal-carousel/modal-carousel.component";

@Component({
  selector: 'app-stroll-me',
  templateUrl: './stroll-me.component.html',
  styleUrls: ['./stroll-me.component.less']
})
export class StrollMeComponent implements OnInit {
  @ViewChild(ModalCarouselComponent, null) child: ModalCarouselComponent;
  directory: string = 'assets/realisation/object/stroll-me/';

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
