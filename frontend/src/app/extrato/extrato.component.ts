import { Component, OnInit } from '@angular/core';
import { ConexaoService } from '../conexao.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
codigo: any;
dados: any;
  constructor(private service: ConexaoService) {
    this.codigo = service.getCodigo()
    this.dados = ''
   }

  ngOnInit(): void {
    this.service.getExtrato(this.codigo).subscribe({
      next: (response) => {
        this.dados = response
        console.log(this.dados)
      },
      error: (erro: any) => console.log(erro)
    });
    if(this.dados = ''){
      window.alert("Sem extrato!")
    }

  }
}