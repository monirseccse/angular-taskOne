import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalthreeComponent } from './modalthree.component';

describe('ModalthreeComponent', () => {
  let component: ModalthreeComponent;
  let fixture: ComponentFixture<ModalthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalthreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
