import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CorrentistasComponent } from './correntistas/correntistas.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
    { path: 'correntistas', component: CorrentistasComponent, }, //canactivate
    { path: 'login', component: LoginComponent, }, //
    { path: 'cadastro', component: CadastroComponent, }, //canactivate
    { path: '', redirectTo: '/', pathMatch: 'full' }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }