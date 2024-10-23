import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourtComponent } from './list-court.component';

describe('ListCourtComponent', () => {
  let component: ListCourtComponent;
  let fixture: ComponentFixture<ListCourtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCourtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
