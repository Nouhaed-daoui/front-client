import { Injectable } from '@angular/core';

import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private apiUrl = 'http://localhost:8070/api/v1/client/balance'; 

  constructor(private http: HttpClient) {}

  // getWalletBalance(email: string, password: string): Observable<number> {
  //   return this.http.post<number>(`${this.apiUrl}/wallet/amount`, { email, password });
  // }
  getWalletBalance(email: string, password: string): Observable<number> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    const data = {
      email: email,
      password: password
    };
    const jsonString = JSON.stringify(data);

    return this.http.post<number>(`${this.apiUrl}`, jsonString,httpOptions);
  }
}
