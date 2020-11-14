import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceMenuComponent } from './espace-menu.component';

describe('EspaceMenuComponent', () => {
  let component: EspaceMenuComponent;
  let fixture: ComponentFixture<EspaceMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EspaceMenuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
