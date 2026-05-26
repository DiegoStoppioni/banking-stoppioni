import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8085/accounts';//http://localhost:4200';
  private accountId = 1; // Default account for now

  constructor(private http: HttpClient) {}

  getBalance(): Observable<any> {
    return this.http.get(`${this.apiUrl}/${this.accountId}/balance?t=${new Date().getTime()}`);
  }

  getTransactions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/${this.accountId}/transactions?t=${new Date().getTime()}`);
  }

  deposit(amount: number, description: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${this.accountId}/deposits`, { amount, description });
  }

  withdraw(amount: number, description: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${this.accountId}/withdrawals`, { amount, description });
  }

  deleteTransaction(transactionId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${this.accountId}/transactions/${transactionId}`);
  }

  convertToFiat(targetCurrency: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${this.accountId}/balance/convert/fiat?to=${targetCurrency}&t=${new Date().getTime()}`);
  }

  convertToCrypto(targetCrypto: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${this.accountId}/balance/convert/crypto?to=${targetCrypto}&t=${new Date().getTime()}`);
  }
}
