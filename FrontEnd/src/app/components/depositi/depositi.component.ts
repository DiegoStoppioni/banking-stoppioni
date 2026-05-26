import { Component, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-depositi',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './depositi.component.html',
  styleUrl: './depositi.component.css',
})
export class DepositiComponent {
  amount: number = 0;
  description: string = '';

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  onDeposit(): void {
    if (this.amount <= 0) {
      alert('Inserisci un importo valido');
      return;
    }

    this.apiService.deposit(this.amount, this.description).subscribe({
      next: (res) => {
        alert('Deposito effettuato con successo! Nuovo saldo: ' + res.balance);
        this.amount = 0;
        this.description = '';
        this.cdr.detectChanges();
      },
      error: (err) => {
        alert('Errore durante il deposito: ' + (err.error?.error || err.message));
        this.cdr.detectChanges();
      }
    });
  }
}
