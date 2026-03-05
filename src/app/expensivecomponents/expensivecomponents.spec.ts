import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expensivecomponents } from './expensivecomponents';

describe('Expensivecomponents', () => {
  let component: Expensivecomponents;
  let fixture: ComponentFixture<Expensivecomponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Expensivecomponents],
    }).compileComponents();

    fixture = TestBed.createComponent(Expensivecomponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
