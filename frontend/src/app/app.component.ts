import { Component } from '@angular/core';
import { ConexaoService } from './conexao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'banco';
  constructor(private service: ConexaoService){

  }

sair(){
    this.service.setCodigo(null)
  }
}
