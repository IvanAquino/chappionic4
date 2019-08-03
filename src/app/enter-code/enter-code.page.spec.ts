import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterCodePage } from './enter-code.page';

describe('EnterCodePage', () => {
  let component: EnterCodePage;
  let fixture: ComponentFixture<EnterCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterCodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
