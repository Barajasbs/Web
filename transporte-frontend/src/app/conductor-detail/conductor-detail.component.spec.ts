import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorDetailComponent } from './conductor-detail.component';

describe('ConductorDetailComponent', () => {
  let component: ConductorDetailComponent;
  let fixture: ComponentFixture<ConductorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConductorDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConductorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
