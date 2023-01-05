import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexaoService } from '../conexao.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ConexaoService, private route: Router) { 
    
  }

  ngOnInit(): void {
  }

  getCorrentista(id: any){
    this.service.setCodigo(id);
    if (id =  ''){
      alert("Código inválido!")
    }
    else{
      this.route.navigate(['/correntistas'])
    }
    
  }

}
