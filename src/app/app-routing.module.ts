import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendToWalletComponent } from './send-to-wallet/send-to-wallet.component';

const routes: Routes = [{ path: 'send', component: SendToWalletComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
