import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Archive } from './archive';

describe('Archive', () => {
  let component: Archive;
  let fixture: ComponentFixture<Archive>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Archive],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Archive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
