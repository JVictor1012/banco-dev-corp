import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexaoService } from '../conexao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private service: ConexaoService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar(nome: string, email: string, saldo: any): void{
    this.service.cadastrarCorrentista(nome, email, saldo);
    console.log(nome, email, saldo);
  }

  proxima(){
    this.router.navigate(['/correntistas']);
}

}
