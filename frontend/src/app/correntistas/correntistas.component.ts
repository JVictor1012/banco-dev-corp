import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ConexaoService } from '../conexao.service';


@Component({
  selector: 'app-correntistas',
  templateUrl: './correntistas.component.html',
  styleUrls: ['./correntistas.component.css']
})
export class CorrentistasComponent implements OnInit {

  dados : any;
  codigo: any;
 
  constructor(private service: ConexaoService, private route: Router) {
    this.dados = '';
    //this.codigo = service.getCodigo();
    this.codigo = 1
 
   }


  ngOnInit(): void {
    this.service.getCorrentistasId(this.codigo).subscribe({
      next: (response) => {
        this.dados = response
      },
      error: (erro: any) => console.log(erro)
    });

  }

}
