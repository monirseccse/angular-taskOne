import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildB2Component } from './grand-child-b2.component';

describe('GrandChildB2Component', () => {
  let component: GrandChildB2Component;
  let fixture: ComponentFixture<GrandChildB2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandChildB2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandChildB2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
