import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexaoService {

   api : string
   codigo: any

  constructor(private http: HttpClient) {
    this.api = "http://localhost:3000";
    this.codigo = 0
   }

   getCodigo(){
   return this.codigo;
  }

  setCodigo(value: any){
    this.codigo = value;
  }

  getCorrentistas(): Observable<any>{
    return this.http.get<any>(`${this.api}/correntistas`);
    
  }

  getCorrentistasId(id: any): Observable<any>{
    return this.http.get(`${this.api}/correntistas/${id}`)
  }

  getExtrato(id: any){
    return this.http.get(`${this.api}/extrato/${id}`)
  }

  cadastrarCorrentista(nome: string, email: string, saldo: any): Observable<any>{
    return this.http.post(`${this.api}/correntistas`, {
      "NomeCorrentista": nome,
      "Email": email,
      "Saldo": saldo
    }
    );
  }

  sacar(id: any, valor: any): Observable<any>{
    return this.http.post(`${this.api}/saque`, {
      "IdCorrentistaOrigem": id,
      "valor": valor,
    }
    )
  }

  tranferencia(origem: any, destino: any, valor: any): Observable<any>{
    return this.http.post(`${this.api}/transferencia`, {
      "IdCorrentistaOrigem": origem,
      "IdCorrentistaDestino": destino,
      "valor": valor,
    }
    )
  }

  pagamento(origem: any, valor: any): Observable<any>{
    return this.http.post(`${this.api}/pagamento`, {
      "IdCorrentistaOrigem": origem,
      "valor": valor,
    }
    )
  }

  deposito( destino: any, valor: any): Observable<any>{
    return this.http.post(`${this.api}/deposito`, {
      "IdCorrentistaDestino": destino,
      "valor": valor,
    }
    )
  }

  sair(){
    this.setCodigo(null)
  }

}
