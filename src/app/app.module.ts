import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { WalletComponent } from './wallet/wallet.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AlltransactionComponent } from './alltransaction/alltransaction.component';
import { TransfertComponent } from './transfert/transfert.component';
import { HomeComponent } from './home/home.component';
import { AlltransactionextourneComponent } from './alltransactionextourne/alltransactionextourne.component';

@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    NavbarComponent,
    AlltransactionComponent,
    TransfertComponent,
    HomeComponent,
    AlltransactionextourneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
