import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesUsedComponent } from './resources-used.component';

describe('ResourcesUsedComponent', () => {
  let component: ResourcesUsedComponent;
  let fixture: ComponentFixture<ResourcesUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesUsedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResourcesUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
