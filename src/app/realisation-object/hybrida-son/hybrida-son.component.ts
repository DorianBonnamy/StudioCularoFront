import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hybrida-son',
  templateUrl: './hybrida-son.component.html',
  styleUrls: ['./hybrida-son.component.less']
})
export class HybridaSonComponent implements OnInit {
  directory: string = 'assets/realisation/object/hybrida-son/';

  images: string[] = [this.directory + '1.jpg'];

  constructor() {}

  ngOnInit() {}
}
