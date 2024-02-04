import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';
import { Categorie } from 'src/model/Categorie';
import { Recette } from 'src/model/Recette';
import { CategorieService } from 'src/service/categorie.service';
import { RecetteService } from 'src/service/recettes-culinaires.service';
import { UtilisateurService } from 'src/service/utilisateur.service';

@Component({
  selector: 'app-add-recette',
  templateUrl: './add-recette.component.html',
  styleUrls: ['./add-recette.component.css'],
  providers: [MessageService]
})
export class AddRecetteComponent {

   recette: Recette = {
    id: '',
    titre: '',
    description: '',
    image: '',
    ingredients: '',
    categorie: { id:'', label:''},
    feedback: ''
  };

  categories:Categorie[]=[];
  



  constructor(private router:Router, private recetteService:RecetteService, private categorieService:CategorieService, private messageService: MessageService){}

  ngOnInit():void{
   this.getCategories();
  }

  getCategories(){
    this.categorieService.getCategories().subscribe({
      next:(data)=>{
        this.categories=data;
      }
    }

    )
  }

  addRecette(){
    return this.recetteService.addRecette(this.recette).subscribe({
      next:(r)=>{
        console.log('La recette '+r.titre+' a été ajouté avec succès !');
        this.router.navigate(['list']);
      }
    }
    )
  }

}
