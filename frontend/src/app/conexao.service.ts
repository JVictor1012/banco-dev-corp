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

  cadastrarCorrentista(nome: string, email: string, saldo: any): Observable<any>{
    return this.http.post(`${this.api}/correntistas`, {
      "NomeCorrentista": nome,
      "Email": email,
      "Saldo": saldo
    }
    );
  }

}
