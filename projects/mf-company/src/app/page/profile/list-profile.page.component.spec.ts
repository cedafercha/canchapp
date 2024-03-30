import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfilePageComponent } from './list-profile.page.component';

describe('ListProfilePageComponent', () => {
  let component: ListProfilePageComponent;
  let fixture: ComponentFixture<ListProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProfilePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
