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
    // Assurez-vous d'ajuster la logique pour envoyer les identifiants au backend
    // et récupérer les transactions
    const url = `${this.apiUrl}?email=${email}&password=${password}`;
    return this.http.get<any[]>(url);
  }

  annulerTransaction(transaction: any): Observable<any> {
    // Adaptez cette logique en fonction du backend
    const url = `${this.apiUrl}/annuler-transaction`;
    return this.http.post(url, transaction);
  }
}
