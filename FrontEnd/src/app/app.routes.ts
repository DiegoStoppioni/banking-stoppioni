import { Routes } from '@angular/router';
import { DepositiComponent } from './components/depositi/depositi.component';
import { PrelieviComponent } from './components/prelievi/prelievi.component';
import { MovimentiComponent } from './components/movimenti/movimenti.component';
import { DettaglioMovimentoComponent } from './components/dettaglio-movimento/dettaglio-movimento.component';
import { SaldoComponent } from './components/saldo/saldo.component';
import { ConvertiFiatComponent } from './components/converti-fiat/converti-fiat.component';
import { ConvertiCryptoComponent } from './components/converti-crypto/converti-crypto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'saldo', pathMatch: 'full' },
  { path: 'depositi', component: DepositiComponent, runGuardsAndResolvers: 'always' },
  { path: 'prelievi', component: PrelieviComponent, runGuardsAndResolvers: 'always' },
  { path: 'movimenti', component: MovimentiComponent, runGuardsAndResolvers: 'always' },
  { path: 'dettaglio-movimento', component: DettaglioMovimentoComponent, runGuardsAndResolvers: 'always' },
  { path: 'saldo', component: SaldoComponent, runGuardsAndResolvers: 'always' },
  { path: 'converti-fiat', component: ConvertiFiatComponent, runGuardsAndResolvers: 'always' },
  { path: 'converti-crypto', component: ConvertiCryptoComponent, runGuardsAndResolvers: 'always' },
];
