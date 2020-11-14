import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationEspaceComponent } from './realisation-espace.component';

describe('RealisationEspaceComponent', () => {
  let component: RealisationEspaceComponent;
  let fixture: ComponentFixture<RealisationEspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RealisationEspaceComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisationEspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
