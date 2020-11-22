import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalCarouselComponent } from '../../modal-carousel/modal-carousel.component';

@Component({
  selector: 'app-tabl-a-chat',
  templateUrl: './tabl-a-chat.component.html',
  styleUrls: ['./tabl-a-chat.component.less']
})
export class TablAChatComponent implements OnInit {
  @ViewChild(ModalCarouselComponent, null) child: ModalCarouselComponent;
  directory: string = 'assets/realisation/object/tabl-a-chat/';

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
