// transaction.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = 'https://votre-api.com/transactions'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  getTransactions(email: string, password: string): Observable<any[]> {
    const data = {
      email: email,
      password: password,
    };

    const jsonString = JSON.stringify(data);

    return this.http.post<any[]>(`${this.apiUrl}/transactions`, jsonString);
  }

  

  annulerTransaction(transaction: any): Observable<any> {
    const jsonString = JSON.stringify(transaction);

    return this.http.post<any>(`${this.apiUrl}/annuler-transaction`, jsonString);
  }
}
