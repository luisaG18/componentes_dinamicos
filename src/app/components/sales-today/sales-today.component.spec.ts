import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTodayComponent } from './sales-today.component';

describe('SalesTodayComponent', () => {
  let component: SalesTodayComponent;
  let fixture: ComponentFixture<SalesTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesTodayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
