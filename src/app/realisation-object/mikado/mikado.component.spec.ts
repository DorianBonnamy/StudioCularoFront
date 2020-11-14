import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MikadoComponent } from './mikado.component';

describe('MikadoComponent', () => {
  let component: MikadoComponent;
  let fixture: ComponentFixture<MikadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MikadoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MikadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
