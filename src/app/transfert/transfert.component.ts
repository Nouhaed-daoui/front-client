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
  error: string | null = null; // Ajout de la propriété error

  constructor(private transfertService: TransfertService) {} // Assurez-vous d'ajuster le service selon votre structure

 

  onSubmit(): void {
    // Utiliser le service pour envoyer les données à l'API backend
    this.transfertService.performTransfert({
      senderEmail: this.senderEmail,
      senderPassword: this.senderPassword,
      receiverEmail: this.beneficiaryEmail,
      amount: this.amount,
    }).subscribe(
      (response) => {
        console.log(response); // Gérer la réponse de l'API selon vos besoins
      },
      (error) => {
        console.error('Erreur lors de la soumission du transfert:', error);
        // Gérer l'erreur selon vos besoins (par exemple, afficher un message d'erreur à l'utilisateur)
        // Vous pouvez également stocker l'erreur dans une propriété pour l'afficher dans le template si nécessaire
        this.error = 'informations incorrectes . Veuillez réessayer.'; // Définir le message d'erreur
      }
    );
  }
  

}
