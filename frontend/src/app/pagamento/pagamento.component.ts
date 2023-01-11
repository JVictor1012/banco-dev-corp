import { Component, OnInit } from '@angular/core';
import { ConexaoService } from '../conexao.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {
codigo: any;
dados: any;
  constructor(private service: ConexaoService) {
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

  pagamento(valor: any){
    this.service.pagamento(this.codigo, valor).subscribe(res =>{
      this.dados = res
    })
  }
}
