import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplComponent } from './templ.component';

describe('TemplComponent', () => {
  let component: TemplComponent;
  let fixture: ComponentFixture<TemplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
