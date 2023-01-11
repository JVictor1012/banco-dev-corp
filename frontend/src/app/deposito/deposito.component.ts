import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexaoService } from '../conexao.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {
  dados: any;
  codigo: any;
  constructor(private service: ConexaoService, private route: Router) {
    this.dados = ''
    this.codigo = this.service.getCodigo()
    }
  
  ngOnInit(): void {
    this.service.getCorrentistasId(this.codigo).subscribe({
      next: (response) => {
        this.dados = response
      },
      error: (erro: any) => console.log(erro)
    });  
  }

  deposito(destino: any, valor: any){
    this.service.tranferencia(this.codigo, destino, valor).subscribe(res =>{
      console.log(res)
    })
      
  }
}