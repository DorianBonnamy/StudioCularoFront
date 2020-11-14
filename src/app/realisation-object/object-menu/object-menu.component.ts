import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-object-menu',
  templateUrl: './object-menu.component.html',
  styleUrls: ['./object-menu.component.less']
})
export class ObjectMenuComponent implements OnInit {
  currentUrl: string;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    console.log('currentUrl : ' + this.currentUrl);
  }

  isSelected(filed: string): boolean {
    if (this.currentUrl === filed) {
      console.log('espace/appartement-atypique-grenoblois');
      return true;
    } else if (this.currentUrl === filed) {
      console.log('espace/appartement-des-canuts');
      return true;
    }
    return false;
  }

  ngOnInit() {}
}
