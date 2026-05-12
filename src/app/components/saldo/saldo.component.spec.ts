import { TestBed } from '@angular/core/testing';
import { SaldoComponent } from './saldo.component';

describe('SaldoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaldoComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SaldoComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
