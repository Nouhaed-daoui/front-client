// transfert.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransfertService {
  private apiUrl = 'https://votre-api.com/transfert'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  performTransfert(data: any): Observable<any> {
    // Assurez-vous d'ajuster la logique pour envoyer les données au backend
    return this.http.post<any>(this.apiUrl, data);
  }
}
