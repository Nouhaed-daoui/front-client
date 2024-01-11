import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionextourneService {

  private apiUrl = 'http://localhost:8222/api/v1/client/extourne';

  constructor(private http: HttpClient) {}

  getTransactionsextourne(email: string, password: string): Observable<any[]> {
    const data = {
      email: email,
      password: password,
    };

    const jsonString = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    // Assurez-vous d'ajuster la logique pour envoyer les données au backend
    return this.http.post<any[]>(`${this.apiUrl}`, jsonString,httpOptions);
  }



}
