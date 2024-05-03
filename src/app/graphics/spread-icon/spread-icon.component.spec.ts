import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadIconComponent } from './spread-icon.component';

describe('SpreadIconComponent', () => {
  let component: SpreadIconComponent;
  let fixture: ComponentFixture<SpreadIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpreadIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpreadIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
