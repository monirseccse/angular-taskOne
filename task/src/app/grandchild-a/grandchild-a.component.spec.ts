import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandchildAComponent } from './grandchild-a.component';

describe('GrandchildAComponent', () => {
  let component: GrandchildAComponent;
  let fixture: ComponentFixture<GrandchildAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandchildAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandchildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
