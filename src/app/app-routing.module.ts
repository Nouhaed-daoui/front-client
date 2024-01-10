import { WalletComponent } from './wallet/wallet.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltransactionComponent } from './alltransaction/alltransaction.component';
import { TransfertComponent } from './transfert/transfert.component';
import { HomeComponent } from './home/home.component';
import { AlltransactionextourneComponent } from './alltransactionextourne/alltransactionextourne.component';


const routes: Routes = [
  { path: 'wallet', component: WalletComponent },
  {path: 'alltransaction', component: AlltransactionComponent},
  {path: 'wallet_to_another', component: TransfertComponent},
  { path: '', component: HomeComponent },
  { path: 'transaction_extourne', component: AlltransactionextourneComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
