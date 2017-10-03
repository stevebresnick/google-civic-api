import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivicinfoComponent } from './civicinfo.component';

describe('CivicinfoComponent', () => {
  let component: CivicinfoComponent;
  let fixture: ComponentFixture<CivicinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivicinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivicinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
