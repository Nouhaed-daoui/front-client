import { Component } from '@angular/core';

@Component({
  selector: 'app-send-to-wallet',
  templateUrl: './send-to-wallet.component.html',
  styleUrls: ['./send-to-wallet.component.css']
})
export class SendToWalletComponent {
  fromWallet: string = '';
  toWallet: string = '';
  amount: number = 0;

  sendMoney() {
    console.log(`Sending ${this.amount} from ${this.fromWallet} to ${this.toWallet}`);
    this.fromWallet = '';
    this.toWallet = '';
    this.amount = 0;
  }
}
