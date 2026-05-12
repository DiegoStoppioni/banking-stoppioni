import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  navItems: NavItem[] = [
    {
      label: 'Saldo Attuale',
      route: 'saldo',
      description: 'Visualizza il saldo del conto',
      icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="5" width="14" height="10" rx="2"/>
        <path d="M5 5V3.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V5"/>
        <circle cx="9" cy="10" r="2"/>
      </svg>`
    },
    {
      label: 'Depositi',
      route: 'depositi',
      description: 'Gestisci i depositi',
      icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 2v10M5 8l4 4 4-4"/>
        <path d="M3 14h12a1 1 0 0 1 1 1v1H2v-1a1 1 0 0 1 1-1z"/>
      </svg>`
    },
    {
      label: 'Prelievi',
      route: 'prelievi',
      description: 'Gestisci i prelievi',
      icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 16V6M5 10l4-4 4 4"/>
        <path d="M3 14h12a1 1 0 0 1 1 1v1H2v-1a1 1 0 0 1 1-1z"/>
      </svg>`
    },
    {
      label: 'Lista Movimenti',
      route: 'movimenti',
      description: 'Tutti i movimenti del conto',
      icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="14" height="14" rx="2"/>
        <path d="M5 6h8M5 9h8M5 12h5"/>
      </svg>`
    },
    {
      label: 'Dettaglio Movimento',
      route: 'dettaglio-movimento',
      description: 'Dettaglio di un singolo movimento',
      icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="9" cy="9" r="7"/>
        <path d="M9 6v3l2 2"/>
      </svg>`
    },
    {
      label: 'Converti in Fiat',
      route: 'converti-fiat',
      description: 'Converti saldo in valuta fiat (Frankfurter)',
      icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="9" cy="9" r="7"/>
        <path d="M9 4v10M6.5 6.5S7.5 5 9 5s2.5 1 2.5 2.5c0 1.5-1 2-2.5 2.5-1.5.5-2.5 1-2.5 2.5S7.5 14 9 14s2.5-1 2.5-1.5"/>
      </svg>`
    },
    {
      label: 'Converti in Crypto',
      route: 'converti-crypto',
      description: 'Converti saldo in criptovaluta (Binance)',
      icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 2L3 5.5v7L9 16l6-3.5v-7L9 2z"/>
        <path d="M9 2v14M3 5.5l6 3.5 6-3.5"/>
      </svg>`
    },
  ];
}
