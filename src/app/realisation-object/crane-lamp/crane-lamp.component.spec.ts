import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraneLampComponent } from './crane-lamp.component';

describe('CraneLampComponent', () => {
  let component: CraneLampComponent;
  let fixture: ComponentFixture<CraneLampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CraneLampComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraneLampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
