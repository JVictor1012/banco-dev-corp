import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CorrentistasComponent } from './correntistas/correntistas.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { FormsModule } from '@angular/forms';
import { SaqueComponent } from './saque/saque.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { DepositoComponent } from './deposito/deposito.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CorrentistasComponent,
    LoginComponent,
    CadastroComponent,
    SaqueComponent,
    TransferenciaComponent,
    PagamentoComponent,
    ExtratoComponent,
    DepositoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
