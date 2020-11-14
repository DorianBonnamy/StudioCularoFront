import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationObjectComponent } from './realisation-object.component';

describe('RealisationObjectComponent', () => {
  let component: RealisationObjectComponent;
  let fixture: ComponentFixture<RealisationObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RealisationObjectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisationObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
