import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-saldo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saldo.component.html',
  styleUrl: './saldo.component.css',
})
export class SaldoComponent implements OnInit, OnDestroy {
  balance: number = 0;
  private routerSubscription?: Subscription;

  constructor(private apiService: ApiService, private router: Router, private cdr: ChangeDetectorRef) {
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.loadBalance();
    });
  }

  ngOnInit(): void {
    this.loadBalance();
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  loadBalance(): void {
    this.apiService.getBalance().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          // Prova a leggere balance_after o saldo a seconda di cosa restituisce l'API
          this.balance = data[0].balance_after !== undefined ? data[0].balance_after : data[0].saldo;
        } else {
          this.balance = 0;
        }
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading balance', err);
        this.cdr.detectChanges();
      }
    });
  }
}
