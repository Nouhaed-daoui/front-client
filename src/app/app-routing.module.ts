import { WalletComponent } from './wallet/wallet.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltransactionComponent } from './alltransaction/alltransaction.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'wallet', component: WalletComponent },
  {path: 'alltransaction', component: AlltransactionComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
