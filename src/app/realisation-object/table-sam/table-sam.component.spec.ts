import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSamComponent } from './table-sam.component';

describe('TableSamComponent', () => {
  let component: TableSamComponent;
  let fixture: ComponentFixture<TableSamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableSamComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
