import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlbarComponent } from './controlbar.component';

describe('ControlbarComponent', () => {
  let component: ControlbarComponent;
  let fixture: ComponentFixture<ControlbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ControlbarComponent]
    });
    fixture = TestBed.createComponent(ControlbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
