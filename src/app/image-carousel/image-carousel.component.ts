import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.less']
})
export class ImageCarouselComponent implements OnInit, AfterViewInit {
 

   @Input() images: string[];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log("carousel", this.images);
  }

 

}
