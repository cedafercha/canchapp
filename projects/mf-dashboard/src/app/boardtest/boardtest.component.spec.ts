import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardtestComponent } from './boardtest.component';

describe('BoardtestComponent', () => {
  let component: BoardtestComponent;
  let fixture: ComponentFixture<BoardtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardtestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
