import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from 'src/model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  private userUrl="http://localhost:8080/api/v1/utilisateurs/"


  getUsers(){
    return this.http.get<Utilisateur>(this.userUrl);
  }

  getUserById(id:string){
    return this.http.get<Utilisateur>("http://localhost:8080/api/v1/utilisateurs/id/"+id);
  }
  
  addUser(myUser:Utilisateur){
    return this.http.post<Utilisateur>(this.userUrl,myUser);
  }
  updateUser(myUser:Utilisateur){
    return this.http.put<Utilisateur>(this.userUrl,myUser);
  }
  deleteUserById(id:string){
    return this.http.delete<Utilisateur>("http://localhost:8080/api/v1/utilisateurs/id/"+id);
  }
}
