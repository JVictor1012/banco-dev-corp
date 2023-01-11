import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CorrentistasComponent } from './correntistas/correntistas.component';
import { DepositoComponent } from './deposito/deposito.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { LoginComponent } from './login/login.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { SaqueComponent } from './saque/saque.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';



const routes: Routes = [
    { path: 'pagamento', component: PagamentoComponent, }, //canactivate
    { path: 'correntistas', component: CorrentistasComponent, }, //canactivate
    { path: 'extrato', component: ExtratoComponent,},
    { path: 'login', component: LoginComponent, }, //
    { path: 'cadastro', component: CadastroComponent, }, //canactivate
    { path: 'saque', component: SaqueComponent,},
    { path: 'transferencia', component: TransferenciaComponent,},
    { path: 'deposito', component: DepositoComponent,},
    { path: '', redirectTo: '/login', pathMatch: 'full' }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }