import { Component } from '@angular/core';
import { TransfertService } from './../transfert.service';

@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.component.html',
  styleUrls: ['./transfert.component.css']
})
export class TransfertComponent {
  senderEmail: string = '';
  senderPassword: string = '';
  beneficiaryEmail: string = '';
  amount: number = 0;

  constructor(private transfertService: TransfertService) {} // Assurez-vous d'ajuster le service selon votre structure

  onSubmit(): void {
    // Utiliser le service pour envoyer les données à l'API backend
    this.transfertService.performTransfert({
      senderEmail: this.senderEmail,
      senderPassword: this.senderPassword,
      receiverEmail: this.beneficiaryEmail,
      amount: this.amount,
    }).subscribe(response => {
      console.log(response); // Gérer la réponse de l'API selon vos besoins
    });
  }

}
