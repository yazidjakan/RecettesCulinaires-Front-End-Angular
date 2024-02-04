import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recette } from 'src/model/Recette';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  private recetteurl = "http://localhost:8080/api/v1/recettes/";

  constructor(private http: HttpClient) { }

  getRecettes() {
    return this.http.get(this.recetteurl);
  }

  getRecetteById(id: string) {
    return this.http.get("http://localhost:8080/api/v1/recettes/id/" + id);
  }

  addRecette(recette: Recette): Observable<Recette> {
    const authToken = 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ5YXppZGpha2FuMEBnbWFpbC5jb20iLCJyb2xlcyI6W3siaWQiOiI2NWJkMDAwYzMyY2I3NTJiMGI3NzA3MjciLCJuYW1lIjoiUk9MRV9VU0VSIn1dLCJpYXQiOjE3MDcwNjkxNzgsImV4cCI6MTcwNzA2OTc3OH0.AE8_kmJrIwILKyg6BE2HiqmRvU_OoEiQ0AJpaMGCM7zaB__xGBprNDkUAAKEVTTN';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    });

    return this.http.post<Recette>(this.recetteurl, recette, { headers, withCredentials: true });
  }
  updateRecette(recette: Recette): Observable<Recette> {
    return this.http.put<Recette>(this.recetteurl, recette);
  }

  updateRecetteById(id: string, recetteupdated: any): Observable<any> {
    return this.http.put<any>("http://localhost:8080/api/v1/recettes/id/" + id, recetteupdated);
  }

  deleteRecette(id: number) {
    return this.http.delete<Recette>("http://localhost:8080/api/v1/recettes/id/" + id);
  }
}
