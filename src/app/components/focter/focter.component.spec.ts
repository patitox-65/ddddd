import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocterComponent } from './focter.component';

describe('FocterComponent', () => {
  let component: FocterComponent;
  let fixture: ComponentFixture<FocterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FocterComponent]
    });
    fixture = TestBed.createComponent(FocterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
