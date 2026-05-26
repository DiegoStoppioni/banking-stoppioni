import { Component, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prelievi',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './prelievi.component.html',
  styleUrl: './prelievi.component.css',
})
export class PrelieviComponent {
  amount: number = 0;
  description: string = '';

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  onWithdraw(): void {
    if (this.amount <= 0) {
      alert('Inserisci un importo valido');
      return;
    }

    this.apiService.withdraw(this.amount, this.description).subscribe({
      next: (res) => {
        alert('Prelievo effettuato con successo! Nuovo saldo: ' + res.balance);
        this.amount = 0;
        this.description = '';
        this.cdr.detectChanges();
      },
      error: (err) => {
        alert('Errore durante il prelievo: ' + (err.error?.error || err.message));
        this.cdr.detectChanges();
      }
    });
  }
}
