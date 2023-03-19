import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandchildA2Component } from './grandchild-a2.component';

describe('GrandchildA2Component', () => {
  let component: GrandchildA2Component;
  let fixture: ComponentFixture<GrandchildA2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandchildA2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandchildA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
