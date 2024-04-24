import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageRealComponent } from './landing-page-real.component';

describe('LandingPageRealComponent', () => {
  let component: LandingPageRealComponent;
  let fixture: ComponentFixture<LandingPageRealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageRealComponent]
    });
    fixture = TestBed.createComponent(LandingPageRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
