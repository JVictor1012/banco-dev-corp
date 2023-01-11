import { Component, OnInit } from '@angular/core';
import { ConexaoService } from '../conexao.service';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {
  codigo: any;
  dados: any

  constructor(private service:ConexaoService) { 
    this.codigo = service.getCodigo();
    this.dados = ''
  }

  ngOnInit(): void {
    this.service.getCorrentistasId(this.codigo).subscribe({
      next: (response) => {
        this.dados = response
      },
      error: (erro: any) => console.log(erro)
    });

  }

  saque(valor:any){
    this.service.sacar(this.codigo, valor).subscribe(res =>{
      this.dados = res
    })

  }

}
