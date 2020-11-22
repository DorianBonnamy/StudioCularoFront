import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalCarouselComponent } from '../../modal-carousel/modal-carousel.component';

@Component({
  selector: 'app-table-sam',
  templateUrl: './table-sam.component.html',
  styleUrls: ['./table-sam.component.less']
})
export class TableSamComponent implements OnInit {
  @ViewChild(ModalCarouselComponent, null) child: ModalCarouselComponent;
  directory: string = 'assets/realisation/object/table-sam/';

  images: string[] = [
    this.directory + '1.jpg',
    this.directory + '2.jpg',
    this.directory + '3.jpg',
    this.directory + '4.jpg',
    this.directory + '5.jpg',
    this.directory + '6.jpg',
    this.directory + '7.jpg',
    this.directory + '8.jpg'
  ];

  constructor() {}

  ngOnInit() {}
}
