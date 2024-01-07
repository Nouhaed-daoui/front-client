import { TransactionService } from './../transaction.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-alltransaction',
  templateUrl: './alltransaction.component.html',
  styleUrls: ['./alltransaction.component.css']
})
export class AlltransactionComponent {
  transactions: any[] = [];
  email: string = '';
  password: string = '';
  showTable: boolean = true; // Ajout de la variable showTable

  constructor(private transactionService: TransactionService) {}

  getTransactions(): void {
    this.transactionService.getTransactions(this.email, this.password)
      .subscribe(transactions => {
        this.transactions = transactions;
        this.showTable = true; // Afficher le tableau après la récupération des données
      });
  }
}
