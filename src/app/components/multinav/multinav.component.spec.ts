import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultinavComponent } from './multinav.component';

describe('MultinavComponent', () => {
  let component: MultinavComponent;
  let fixture: ComponentFixture<MultinavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultinavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultinavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
