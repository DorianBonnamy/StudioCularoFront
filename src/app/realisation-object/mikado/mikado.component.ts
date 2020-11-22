import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalCarouselComponent } from "../../modal-carousel/modal-carousel.component";

@Component({
  selector: 'app-mikado',
  templateUrl: './mikado.component.html',
  styleUrls: ['./mikado.component.less']
})
export class MikadoComponent implements OnInit {
  @ViewChild(ModalCarouselComponent, null) child: ModalCarouselComponent;
  directory: string = 'assets/realisation/object/mikado/';

  images: string[] = [
    this.directory + '1.jpg',
    this.directory + '2.jpg',
    this.directory + '3.jpg',
  ];

  constructor() {}

  ngOnInit() {}
}
