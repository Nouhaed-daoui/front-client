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
  error: string | null = null;

  constructor(private transfertService: TransfertService) {}



  onSubmit(): void {
    this.transfertService.performTransfert({
      senderEmail: this.senderEmail,
      senderPassword: this.senderPassword,
      receiverEmail: this.beneficiaryEmail,
      amount: this.amount,
    }).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('Erreur lors de la soumission du transfert:', error);
        this.error = 'informations incorrectes . Veuillez réessayer.';
      }
    );
  }


}
