// transaction.service.ts

import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = 'http://localhost:8222/api/v1/client/servis';

   private apiUrlannuler = 'http://localhost:8222/api/v1/client/annuler';

  constructor(private http: HttpClient) {}

  getTransactions(email: string, password: string): Observable<any[]> {
    const data = {
      email: email,
      password: password,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    const jsonString = JSON.stringify(data);

    return this.http.post<any[]>(`${this.apiUrl}`, jsonString,httpOptions);
  }

  annulerTransaction(transaction: any): Observable<any> {
    const jsonString = JSON.stringify(transaction);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.put<any>(`${this.apiUrlannuler}`, jsonString,httpOptions);
  }
}
