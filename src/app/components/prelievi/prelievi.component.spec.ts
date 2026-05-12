import { TestBed } from '@angular/core/testing';
import { PrelieviComponent } from './prelievi.component';

describe('PrelieviComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrelieviComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PrelieviComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
