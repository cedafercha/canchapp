import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourtPageComponent } from './list-court.page.component';

describe('ListCourtPageComponent', () => {
  let component: ListCourtPageComponent;
  let fixture: ComponentFixture<ListCourtPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCourtPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCourtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
