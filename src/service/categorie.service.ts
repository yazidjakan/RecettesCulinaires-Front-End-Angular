import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from 'src/model/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }

  private apiUrl="http://localhost:8080/api/v1/categories/"


  getCategories():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  getCategorieById(id:string){
    return this.http.get<Categorie>("http://localhost:8080/api/v1/categories/id/"+id);
  }
  
}
