import { Component, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-converti-fiat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './converti-fiat.component.html',
  styleUrl: './converti-fiat.component.css',
})
export class ConvertiFiatComponent {
  targetCurrency: string = 'USD';
  conversionResult: any = null;
  availableCurrencies: string[] = ['USD', 'GBP', 'JPY', 'CHF', 'CAD', 'AUD', 'CNY'];

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  onConvert(): void {
    this.apiService.convertToFiat(this.targetCurrency).subscribe({
      next: (res) => {
        this.conversionResult = res;
        this.cdr.detectChanges();
      },
      error: (err) => {
        alert('Errore durante la conversione: ' + (err.error?.error || err.message));
        this.cdr.detectChanges();
      }
    });
  }
}
