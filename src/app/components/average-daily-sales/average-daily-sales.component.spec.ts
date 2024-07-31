import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageDailySalesComponent } from './average-daily-sales.component';

describe('AverageDailySalesComponent', () => {
  let component: AverageDailySalesComponent;
  let fixture: ComponentFixture<AverageDailySalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AverageDailySalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AverageDailySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
