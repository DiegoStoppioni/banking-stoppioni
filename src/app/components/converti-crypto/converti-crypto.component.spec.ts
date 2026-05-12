import { TestBed } from '@angular/core/testing';
import { ConvertiCryptoComponent } from './converti-crypto.component';

describe('ConvertiCryptoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertiCryptoComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ConvertiCryptoComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
