import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FblinkComponent } from './fblink.component';

describe('FblinkComponent', () => {
  let component: FblinkComponent;
  let fixture: ComponentFixture<FblinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FblinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FblinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
