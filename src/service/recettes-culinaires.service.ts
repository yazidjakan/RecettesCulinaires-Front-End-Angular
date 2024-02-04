import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Recette } from 'src/model/Recette';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  private recetteurl="http://localhost:8080/api/v1/recettes/"

  constructor(private http: HttpClient) { }

  getRecettes(){
    return this.http.get(this.recetteurl);
  }
  getRecetteById(id:string){
    return this.http.get("http://localhost:8080/api/v1/recettes/id/"+id);
  }
  addRecette(recette:Recette):Observable<Recette>{
    return this.http.post<Recette>(this.recetteurl,recette);
  }
  updateRecette(recette:Recette):Observable<Recette>{
    return this.http.put<Recette>(this.recetteurl,recette)
  }
  updateRecetteById(id: string, recetteupdated: any): Observable<any>{
    return this.http.put<any>("http://localhost:8080/api/v1/recettes/id/"+id, recetteupdated);
  }
  deleteRecette(id:number){
    return this.http.delete<Recette>("http://localhost:8080/api/v1/recettes/id/"+id);
  }
}
