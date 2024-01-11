// transfert.service.ts

import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransfertService {
  private apiUrl = 'http://localhost:8222/api/v1/client/send';

  constructor(private http: HttpClient) {}

  performTransfert(data: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    const jsonString = JSON.stringify(data);
    return this.http.put<any>(`${this.apiUrl}`, jsonString, httpOptions);
  }
}
