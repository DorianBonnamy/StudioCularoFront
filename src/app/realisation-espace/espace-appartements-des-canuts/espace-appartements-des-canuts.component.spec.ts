import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceAppartementsDesCanutsComponent } from './espace-appartements-des-canuts.component';

describe('EspaceAppartementsDesCanutsComponent', () => {
  let component: EspaceAppartementsDesCanutsComponent;
  let fixture: ComponentFixture<EspaceAppartementsDesCanutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EspaceAppartementsDesCanutsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceAppartementsDesCanutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
