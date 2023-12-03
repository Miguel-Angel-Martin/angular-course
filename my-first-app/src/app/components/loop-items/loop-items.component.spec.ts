import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopItemsComponent } from './loop-items.component';

describe('LoopItemsComponent', () => {
  let component: LoopItemsComponent;
  let fixture: ComponentFixture<LoopItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoopItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoopItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
