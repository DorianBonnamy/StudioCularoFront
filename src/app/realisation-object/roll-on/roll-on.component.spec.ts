import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollOnComponent } from './roll-on.component';

describe('RollOnComponent', () => {
  let component: RollOnComponent;
  let fixture: ComponentFixture<RollOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RollOnComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
