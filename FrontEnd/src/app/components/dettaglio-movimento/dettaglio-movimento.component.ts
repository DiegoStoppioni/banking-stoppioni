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
  transactions: any[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.loading = true;
    this.error = '';
    this.apiService.getTransactions().subscribe({
      next: (list) => {
        this.transactions = list || [];
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Impossibile caricare i movimenti';
        this.loading = false;
      }
    });
  }
}
