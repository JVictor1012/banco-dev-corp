import { Component, OnInit } from '@angular/core';
import { ConexaoService } from '../conexao.service';
import { Location } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
dados: any;
codigo: any;
  constructor(private service: ConexaoService, private location: Location, private route: Router) {
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

  transferencia(destino: any, valor: any){
    this.service.tranferencia(this.codigo, destino, valor).subscribe(res =>{
      console.log(res)
    })
    
  }
}
