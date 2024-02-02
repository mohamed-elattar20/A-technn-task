import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppexChartComponent } from './appex-chart.component';

describe('AppexChartComponent', () => {
  let component: AppexChartComponent;
  let fixture: ComponentFixture<AppexChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppexChartComponent]
    });
    fixture = TestBed.createComponent(AppexChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
