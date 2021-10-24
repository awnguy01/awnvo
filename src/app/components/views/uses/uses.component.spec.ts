import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsesComponent } from './uses.component';

describe('UsesComponent', () => {
  let component: UsesComponent;
  let fixture: ComponentFixture<UsesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
