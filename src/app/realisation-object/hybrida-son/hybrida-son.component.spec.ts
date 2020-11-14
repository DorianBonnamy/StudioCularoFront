import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridaSonComponent } from './hybrida-son.component';

describe('HybridaSonComponent', () => {
  let component: HybridaSonComponent;
  let fixture: ComponentFixture<HybridaSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HybridaSonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridaSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
