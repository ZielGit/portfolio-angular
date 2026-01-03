import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
