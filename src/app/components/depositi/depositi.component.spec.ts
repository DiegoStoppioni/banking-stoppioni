import { TestBed } from '@angular/core/testing';
import { DepositiComponent } from './depositi.component';

describe('DepositiComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositiComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DepositiComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
