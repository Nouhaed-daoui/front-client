import { TransactionService } from './../transaction.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-alltransaction',
  templateUrl: './alltransaction.component.html',
  styleUrls: ['./alltransaction.component.css']
})
export class AlltransactionComponent {
   transactions: any[] = [];
  // transactions: any[] = [
  //   { beneficiaryEmail: 'beneficiary1@example.com', amount: 100, date: '2024-01-01' },
  //   { beneficiaryEmail: 'beneficiary2@example.com', amount: 150, date: '2024-01-02' }
  // ];
  email: string = '';
  password: string = '';
  showTable: boolean = true; // Ajout de la variable showTable
  error: string | null = null; // Ajout de la propriété error


  constructor(private transactionService: TransactionService) {}

  
  getTransactions(): void {
    this.transactionService.getTransactions(this.email, this.password)
      .subscribe(
        transactions => {
          this.transactions = transactions;
          this.showTable = true;
          this.error = null; // Réinitialiser l'erreur en cas de succès
        },
        error => {
          console.error('Erreur lors de la récupération des transactions:', error);
          this.transactions = []; // Réinitialiser les transactions en cas d'erreur
          this.showTable = false; // Masquer le tableau en cas d'erreur
          this.error = 'Email ou mot de passe incorrectes . Veuillez réessayer.'; // Définir le message d'erreur
        }
      );
  }


  annulerTransaction(transaction: any): void {
    this.transactionService.annulerTransaction(transaction)
      .subscribe(
        response => {
          // Gérez la réponse du backend (peut être un message de succès, etc.)
          console.log('Transaction annulée avec succès', response);
        },
        error => {
          // Gérez les erreurs provenant du backend
          console.error('Erreur lors de l annulation de la transaction', error);
        }
      );
}}
