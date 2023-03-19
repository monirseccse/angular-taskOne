import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaloneComponent } from './modalone.component';

describe('ModaloneComponent', () => {
  let component: ModaloneComponent;
  let fixture: ComponentFixture<ModaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
