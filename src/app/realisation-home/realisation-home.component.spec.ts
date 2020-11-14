import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationHomeComponent } from './realisation-home.component';

describe('RealisationHomeComponent', () => {
  let component: RealisationHomeComponent;
  let fixture: ComponentFixture<RealisationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RealisationHomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
