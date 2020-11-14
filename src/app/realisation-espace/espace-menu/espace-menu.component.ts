import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espace-menu',
  templateUrl: './espace-menu.component.html',
  styleUrls: ['./espace-menu.component.less']
})
export class EspaceMenuComponent implements OnInit {
  currentUrl: string;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
  }

  isSelected(filed: string): boolean {
    if (this.currentUrl === filed) {
      return true;
    } else if (this.currentUrl === filed) {
      return true;
    }
    return false;
  }

  ngOnInit() {}
}
