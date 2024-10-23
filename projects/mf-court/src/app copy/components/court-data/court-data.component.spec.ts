import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtDataComponent } from './court-data.component';

describe('CourtDataComponent', () => {
  let component: CourtDataComponent;
  let fixture: ComponentFixture<CourtDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourtDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourtDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
