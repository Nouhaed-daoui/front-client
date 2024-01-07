import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private apiUrl = 'https://votre-api-backend'; 

  constructor(private http: HttpClient) {}

  getWalletBalance(email: string, password: string): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/wallet/amount`, { email, password });
  }
}
