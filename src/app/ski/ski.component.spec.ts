import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiComponent } from './ski.component';

describe('SkiComponent', () => {
  let component: SkiComponent;
  let fixture: ComponentFixture<SkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
