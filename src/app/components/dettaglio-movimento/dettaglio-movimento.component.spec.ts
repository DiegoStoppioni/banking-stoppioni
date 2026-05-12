import { TestBed } from '@angular/core/testing';
import { DettaglioMovimentoComponent } from './dettaglio-movimento.component';

describe('DettaglioMovimentoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettaglioMovimentoComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DettaglioMovimentoComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
