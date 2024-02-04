import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/service/utilisateur.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  constructor(private http:HttpClient, private userService:UtilisateurService, private router:Router){}

  myUser:any={
    id:'',
    nom:'',
    age:'',
    email:'',
    password:''
  }
ngOnInit():void{}
  addUsers(){
    this.userService.addUser(this.myUser).subscribe({
      next:(a)=>{
        console.log('Utilisateur '+a.nom+' est inscrit avec succès !')
        this.router.navigate(['login']);
      }
    }
    )
  }

}
