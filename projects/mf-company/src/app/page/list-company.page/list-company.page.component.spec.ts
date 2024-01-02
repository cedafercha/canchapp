import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompanyPageComponent } from './list-company.page.component';

describe('ListCompanyPageComponent', () => {
  let component: ListCompanyPageComponent;
  let fixture: ComponentFixture<ListCompanyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCompanyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCompanyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
