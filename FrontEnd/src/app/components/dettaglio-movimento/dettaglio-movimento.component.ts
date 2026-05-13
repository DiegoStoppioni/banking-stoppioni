import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dettaglio-movimento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dettaglio-movimento.component.html',
  styleUrl: './dettaglio-movimento.component.css',
})
export class DettaglioMovimentoComponent implements OnInit {
  transactionId: number = 1;
  transaction: any = null;
  loading: boolean = false;
  error: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadDetail();
  }

  loadDetail(): void {
    this.loading = true;
    this.error = '';
    this.apiService.getTransactions().subscribe({
      next: (list) => {
        if (list && list.length > 0) {
          // Per ora carichiamo il dettaglio dell'ultimo movimento per mostrare qualcosa
          this.transaction = list[0];
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Impossibile caricare il dettaglio';
        this.loading = false;
      }
    });
  }
}
