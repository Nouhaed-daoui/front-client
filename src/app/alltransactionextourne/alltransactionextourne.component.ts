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
  showTable: boolean = true;
  error: string | null = null;
  constructor(private TransactionextourneService: TransactionextourneService) {}




    getTransactions(): void {
      this.TransactionextourneService.getTransactionsextourne(this.email, this.password)
        .subscribe(
          transactionsextournes => {
            this.transactionsextournes = transactionsextournes;
            this.showTable = true; // Afficher le tableau après la récupération des données
          },
          error => {
            console.error('Erreur lors de la récupération des transactions:', error);
            this.showTable = false; // Masquer le tableau en cas d'erreur
            this.error = 'Email ou mot de passe incorrectes. Veuillez réessayer.'; // Définir le message d'erreur
          }
        );
    }

}
