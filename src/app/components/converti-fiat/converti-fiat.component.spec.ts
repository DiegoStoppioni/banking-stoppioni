import { TestBed } from '@angular/core/testing';
import { ConvertiFiatComponent } from './converti-fiat.component';

describe('ConvertiFiatComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertiFiatComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ConvertiFiatComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
