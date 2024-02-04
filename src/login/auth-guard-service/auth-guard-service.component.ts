import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Utilisateur } from 'src/model/Utilisateur';
import { AuthService } from 'src/service/auth.service';
import { UtilisateurService } from 'src/service/utilisateur.service';


@Component({
  selector: 'app-auth-guard-service',
  templateUrl: './auth-guard-service.component.html',
  styleUrls: ['./auth-guard-service.component.css']
})
export class AuthGuardServiceComponent {

  user: Utilisateur = {
    id: '',
    nom: '',
    age: '',
    email: '',
    password: ''
  };

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router:Router, private userService:UtilisateurService) {
  }

  OnSubmit() {
    this.authService.login(this.email, this.password)
      .subscribe(
        Response=>{
        this.router.navigate(['list']);
        },
        error =>{
          console.log("Erreur d'authentification");
        }
      );
  }
  

  OnClick(){
    this.router.navigate(['inscription']);
  }
}

