import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realisation-menu',
  templateUrl: './realisation-menu.component.html',
  styleUrls: ['./realisation-menu.component.less']
})
export class RealisationMenuComponent implements OnInit {
  currentUrl: string;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
  }

  isSelected(filed: string): boolean {
    if (this.currentUrl.includes(filed)) {
      console.log('realisation-espace');
      return true;
    } else if (this.currentUrl.includes(filed)) {
      console.log('realisation-objet');
      return true;
    }
    return false;
  }

  ngOnInit() {}
}
