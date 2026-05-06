import { Component } from '@angular/core';

@Component({
  selector: 'app-converti-fiat',
  standalone: true,
  template: `
    <div class="page-container">
      <h2 class="page-title">Converti in Valuta Fiat</h2>
      <p class="page-subtitle">Converti il tuo saldo in valuta fiat tramite Frankfurter API</p>
    </div>
  `,
  styles: [`
    .page-container { padding: 2rem; }
    .page-title { font-size: 1.75rem; font-weight: 700; color: #0f172a; margin: 0 0 0.5rem; }
    .page-subtitle { color: #64748b; font-size: 1rem; margin: 0; }
  `]
})
export class ConvertiFiatComponent {}
