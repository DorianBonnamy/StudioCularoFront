import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalCarouselComponent } from "../../modal-carousel/modal-carousel.component";

@Component({
  selector: 'app-hybrida-son',
  templateUrl: './hybrida-son.component.html',
  styleUrls: ['./hybrida-son.component.less']
})
export class HybridaSonComponent implements OnInit {
  @ViewChild(ModalCarouselComponent, null) child: ModalCarouselComponent;
  directory: string = 'assets/realisation/object/hybrida-son/';

  images: string[] = [this.directory + '1.jpg'];

  constructor() {}

  ngOnInit() {}
}
