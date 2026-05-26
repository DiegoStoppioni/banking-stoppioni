import { Component, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-converti-crypto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './converti-crypto.component.html',
  styleUrl: './converti-crypto.component.css',
})
export class ConvertiCryptoComponent {
  targetCrypto: string = 'BTC';
  conversionResult: any = null;
  availableCryptos: string[] = ['BTC', 'ETH', 'SOL', 'BNB', 'XRP', 'ADA', 'DOGE', 'DOT'];

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  onConvert(): void {
    this.apiService.convertToCrypto(this.targetCrypto).subscribe({
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
