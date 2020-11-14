import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrollMeComponent } from './stroll-me.component';

describe('StrollMeComponent', () => {
  let component: StrollMeComponent;
  let fixture: ComponentFixture<StrollMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StrollMeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrollMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
