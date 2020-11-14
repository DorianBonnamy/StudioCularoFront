import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablAChatComponent } from './tabl-a-chat.component';

describe('TablAChatComponent', () => {
  let component: TablAChatComponent;
  let fixture: ComponentFixture<TablAChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TablAChatComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablAChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
