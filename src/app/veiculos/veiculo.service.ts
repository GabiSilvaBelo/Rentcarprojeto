import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Veiculo } from "./veiculo";

@Injectable({
    providedIn: 'root'
})
export class VeiculoService {
    constructor (private http:HttpClient){}

    
    private url = "http://localhost:8080/veiculos";

    public recuperarVeiculos():Observable<Veiculo[]>{
        return this.http.get<any>(this.url);
    }

    public salvarVeiculo(veiculo:Veiculo):Observable<any>{
        return this.http.post<Veiculo>(this.url+"/inserir", veiculo);
    }

    public apagarVeiculo(id:number, modelo:string):Observable<any>{
        return this.http.delete<Veiculo>(this.url+"?id="+id+"&modelo="+modelo);
    }

    public alterarVeiculo(Veiculo:Veiculo):Observable<any>{
        return this.http.put<Veiculo>(this.url, Veiculo);
    }
}