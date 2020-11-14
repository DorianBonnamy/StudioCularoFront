import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EspaceAppartementAtypiqueGrenobloisComponent } from './espace-appartement-atypique-grenoblois.component';

describe('EspaceAppartementAtypiqueGrenobloisComponent', () => {
  let component: EspaceAppartementAtypiqueGrenobloisComponent;
  let fixture: ComponentFixture<EspaceAppartementAtypiqueGrenobloisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EspaceAppartementAtypiqueGrenobloisComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceAppartementAtypiqueGrenobloisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
