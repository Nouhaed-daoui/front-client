import { TransactionextourneService } from './../transactionextourne.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alltransactionextourne',
  templateUrl: './alltransactionextourne.component.html',
  styleUrls: ['./alltransactionextourne.component.css']
})
export class AlltransactionextourneComponent {

  transactionsextournes: any[] = [];
  email: string = '';
  password: string = '';
  showTable: boolean = true; // Ajout de la variable showTable

  constructor(private TransactionextourneService: TransactionextourneService) {}

  getTransactions(): void {
    this.TransactionextourneService.getTransactionsextourne(this.email, this.password)
      .subscribe(transactionsextournes => {
        this.transactionsextournes = transactionsextournes;
        this.showTable = true; // Afficher le tableau après la récupération des données
      });
  }

}
