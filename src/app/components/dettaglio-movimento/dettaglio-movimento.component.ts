import { Component } from '@angular/core';

@Component({
  selector: 'app-dettaglio-movimento',
  standalone: true,
  template: `
    <div class="page-container">
      <h2 class="page-title">Dettaglio Movimento</h2>
      <p class="page-subtitle">Visualizza il dettaglio di un singolo movimento</p>
    </div>
  `,
  styles: [`
    .page-container { padding: 2rem; }
    .page-title { font-size: 1.75rem; font-weight: 700; color: #0f172a; margin: 0 0 0.5rem; }
    .page-subtitle { color: #64748b; font-size: 1rem; margin: 0; }
  `]
})
export class DettaglioMovimentoComponent {}
