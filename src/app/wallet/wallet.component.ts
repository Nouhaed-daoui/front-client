import { Component } from '@angular/core';

import {  OnInit } from '@angular/core';

import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {

  error: string | null = null; // Ajout de la propriété error
  email: string = '';
  password: string = '';
  //amount: number = 0;
  amount: number | null = null;

  constructor(private walletService: WalletService) {}

  onSubmit() {
    this.walletService.getWalletBalance(this.email, this.password).subscribe(
      (amount: number) => {
        this.amount = amount;
        this.error = null; 
      },
      (error) => {
        console.error('Erreur lors de la récupération du solde du portefeuille:', error);
        this.error = 'Email ou mot de passe incorrectes . Veuillez réessayer.'; // Définir le message d'erreur
        // Gérez les erreurs selon vos besoins
      }
    );
  }
}