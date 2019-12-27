import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDisplayItemComponent } from './business-display-item.component';

describe('BusinessDisplayItemComponent', () => {
  let component: BusinessDisplayItemComponent;
  let fixture: ComponentFixture<BusinessDisplayItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessDisplayItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDisplayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
