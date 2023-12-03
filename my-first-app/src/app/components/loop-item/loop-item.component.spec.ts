import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopItemComponent } from './loop-item.component';

describe('LoopItemComponent', () => {
  let component: LoopItemComponent;
  let fixture: ComponentFixture<LoopItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoopItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoopItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
