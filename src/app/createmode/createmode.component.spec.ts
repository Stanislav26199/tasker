import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemodeComponent } from './createmode.component';

describe('CreatemodeComponent', () => {
  let component: CreatemodeComponent;
  let fixture: ComponentFixture<CreatemodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
