import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from 'src/model/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private roleUrl="http://localhost:8080/api/v1/roles/";

  constructor(private http:HttpClient) { }

  getRoles():Observable<any>{
    return this.http.get<any>(this.roleUrl);
  }
  getRoleById(id:string){
    return this.http.get<Role>(this.roleUrl+"id/"+id);
  }
}
