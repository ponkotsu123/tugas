import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahPage } from './tambah.page';

describe('TambahPage', () => {
  let component: TambahPage;
  let fixture: ComponentFixture<TambahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
