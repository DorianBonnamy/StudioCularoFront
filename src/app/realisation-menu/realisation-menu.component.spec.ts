import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationMenuComponent } from './realisation-menu.component';

describe('RealisationMenuComponent', () => {
  let component: RealisationMenuComponent;
  let fixture: ComponentFixture<RealisationMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RealisationMenuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
