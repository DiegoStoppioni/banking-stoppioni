import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-movimenti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movimenti.component.html',
  styleUrl: './movimenti.component.css',
})
export class MovimentiComponent implements OnInit, OnDestroy {
  transactions: any[] = [];
  private routerSubscription?: Subscription;

  constructor(private apiService: ApiService, private router: Router, private cdr: ChangeDetectorRef) {
    // Forza il ricaricamento se si clicca sulla stessa rotta
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.loadTransactions();
    });
  }

  ngOnInit(): void {
    this.loadTransactions();
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  loadTransactions(): void {
    this.apiService.getTransactions().subscribe({
      next: (data) => {
        this.transactions = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading transactions', err);
        this.cdr.detectChanges();
      }
    });
  }

  deleteTransaction(id: number): void {
    this.apiService.deleteTransaction(id).subscribe({
      next: () => {
        this.loadTransactions();
      },
      error: (err) => {
        alert(err.error?.error || 'Error deleting transaction');
      }
    });
  }
}
