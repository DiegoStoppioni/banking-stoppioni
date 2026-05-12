import { TestBed } from '@angular/core/testing';
import { MovimentiComponent } from './movimenti.component';

describe('MovimentiComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovimentiComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MovimentiComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
