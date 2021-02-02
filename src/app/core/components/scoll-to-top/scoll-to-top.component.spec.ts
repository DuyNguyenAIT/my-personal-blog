import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScollToTopComponent } from './scoll-to-top.component';

describe('ScollToTopComponent', () => {
  let component: ScollToTopComponent;
  let fixture: ComponentFixture<ScollToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScollToTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScollToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
