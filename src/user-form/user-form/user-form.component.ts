import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/model/Role';
import { RoleService } from 'src/service/role.service';
import { UtilisateurService } from 'src/service/utilisateur.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  constructor(private http:HttpClient, private userService:UtilisateurService, private roleService:RoleService, private router:Router){}

  myRoles:Role[]=[];
  myUser:any={
    id:'',
    nom:'',
    age:'',
    email:'',
    password:'',
    roles: { id:'', name:'' }
  }
ngOnInit():void{
  this.getRoles();
}
 
getRoles(){
  this.roleService.getRoles().subscribe((data)=>{
    this.myRoles=data;
  })
}

addUsers() {
  this.userService.addUser(this.myUser).subscribe({
    next: (response) => {
      if (response instanceof HttpResponse) {
        console.log('Utilisateur inscrit avec succès !');
        this.router.navigate(['login']);
      } else {
        console.log('Réponse du serveur:', response);
      }
    },
    error: (error) => {
      console.error('Erreur lors de l\'inscription :', error);
    },
  });
}
}

