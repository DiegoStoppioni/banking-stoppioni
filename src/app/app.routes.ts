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
  { path: 'depositi', component: DepositiComponent },
  { path: 'prelievi', component: PrelieviComponent },
  { path: 'movimenti', component: MovimentiComponent },
  { path: 'dettaglio-movimento', component: DettaglioMovimentoComponent },
  { path: 'saldo', component: SaldoComponent },
  { path: 'converti-fiat', component: ConvertiFiatComponent },
  { path: 'converti-crypto', component: ConvertiCryptoComponent },
];
