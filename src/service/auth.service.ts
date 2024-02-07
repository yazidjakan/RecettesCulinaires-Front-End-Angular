import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, map, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean;


  constructor(private http: HttpClient, private router:Router) {
    this.isAuthenticated = false;
  }
 

  login(email: string, password: string): Observable<boolean> {
    const body = { email: email, password: password };
    const url = 'http://localhost:8080/api/v1/auth/login';
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(url, body, { headers: headers }).pipe(
        map(response => {
            console.log(response);
            
            if (response && response.accessToken) {
                this.isAuthenticated = true;
                localStorage.setItem('token', response.accessToken);
                return true;
            } else {
                this.isAuthenticated = false;
                return false;
            }
        })
    );
}
  
  logout(): void {
    this.isAuthenticated = false;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}