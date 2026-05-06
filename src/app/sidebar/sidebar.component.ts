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
  template: `
    <aside class="sidebar">
      <div class="sidebar-header">
        <div class="brand-logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="10" fill="#2563eb"/>
            <path d="M8 20V14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M6 20h20" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M16 12V9" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <rect x="13" y="15" width="6" height="5" rx="1" stroke="white" stroke-width="1.5"/>
          </svg>
        </div>
        <div class="brand-text">
          <span class="brand-name">NovaBanca</span>
          <span class="brand-tagline">Home Banking</span>
        </div>
      </div>

      <div class="sidebar-section-label">Operazioni</div>

      <nav class="sidebar-nav">
        @for (item of navItems; track item.route) {
          <a
            class="nav-item"
            [routerLink]="item.route"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            [title]="item.description"
          >
            <span class="nav-icon" [innerHTML]="item.icon"></span>
            <span class="nav-label">{{ item.label }}</span>
            <span class="nav-arrow">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5.5 3.5L9 7L5.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </a>
        }
      </nav>

      <div class="sidebar-footer">
        <div class="user-card">
          <div class="user-avatar">MB</div>
          <div class="user-info">
            <span class="user-name">Mario Bianchi</span>
            <span class="user-iban">IT60 X054 2811 1010 0000 0123 456</span>
          </div>
        </div>
      </div>
    </aside>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }

    .sidebar {
      width: 268px;
      min-width: 268px;
      height: 100vh;
      background: #0a1628;
      display: flex;
      flex-direction: column;
      position: fixed;
      left: 0;
      top: 0;
      border-right: 1px solid rgba(255,255,255,0.06);
      overflow: hidden;
    }

    .sidebar-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 28px 24px 20px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }

    .brand-logo {
      flex-shrink: 0;
      filter: drop-shadow(0 4px 12px rgba(37,99,235,0.4));
    }

    .brand-text {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .brand-name {
      font-size: 1.125rem;
      font-weight: 700;
      color: #f1f5f9;
      letter-spacing: -0.3px;
      line-height: 1.2;
    }

    .brand-tagline {
      font-size: 0.7rem;
      font-weight: 500;
      color: #475569;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .sidebar-section-label {
      font-size: 0.65rem;
      font-weight: 600;
      color: #334155;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      padding: 20px 24px 8px;
    }

    .sidebar-nav {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: 0 12px;
      overflow-y: auto;
      scrollbar-width: none;
    }

    .sidebar-nav::-webkit-scrollbar {
      display: none;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 11px 12px;
      border-radius: 10px;
      text-decoration: none;
      color: #64748b;
      font-size: 0.875rem;
      font-weight: 500;
      transition: all 0.18s ease;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    .nav-item::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: #2563eb;
      border-radius: 0 2px 2px 0;
      transform: scaleY(0);
      transition: transform 0.18s ease;
    }

    .nav-item:hover {
      background: rgba(255,255,255,0.05);
      color: #cbd5e1;
    }

    .nav-item:hover .nav-arrow {
      opacity: 1;
      transform: translateX(0);
    }

    .nav-item.active {
      background: rgba(37, 99, 235, 0.12);
      color: #93c5fd;
    }

    .nav-item.active::before {
      transform: scaleY(1);
    }

    .nav-item.active .nav-icon {
      color: #3b82f6;
    }

    .nav-item.active .nav-arrow {
      opacity: 1;
      color: #3b82f6;
    }

    .nav-icon {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: inherit;
      transition: color 0.18s ease;
    }

    .nav-icon :global(svg) {
      width: 18px;
      height: 18px;
    }

    .nav-label {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.2;
    }

    .nav-arrow {
      opacity: 0;
      transform: translateX(-4px);
      transition: all 0.18s ease;
      flex-shrink: 0;
      color: #475569;
    }

    .sidebar-footer {
      padding: 16px 12px 20px;
      border-top: 1px solid rgba(255,255,255,0.06);
    }

    .user-card {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border-radius: 10px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      transition: background 0.18s ease;
      cursor: default;
    }

    .user-card:hover {
      background: rgba(255,255,255,0.07);
    }

    .user-avatar {
      width: 36px;
      height: 36px;
      border-radius: 9px;
      background: linear-gradient(135deg, #1d4ed8, #2563eb);
      color: white;
      font-size: 0.75rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      letter-spacing: 0.05em;
    }

    .user-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
      overflow: hidden;
    }

    .user-name {
      font-size: 0.8rem;
      font-weight: 600;
      color: #e2e8f0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .user-iban {
      font-size: 0.6rem;
      color: #334155;
      font-family: 'Courier New', monospace;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      letter-spacing: 0.02em;
    }
  `]
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
