import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePageComponent } from './directive-page.component';

describe('DirectivePageComponent', () => {
  let component: DirectivePageComponent;
  let fixture: ComponentFixture<DirectivePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivePageComponent]
    });
    fixture = TestBed.createComponent(DirectivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
