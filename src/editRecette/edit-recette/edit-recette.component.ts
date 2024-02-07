import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recette } from 'src/model/Recette';
import { AuthService } from 'src/service/auth.service';
import { CategorieService } from 'src/service/categorie.service';
import { RecetteService } from 'src/service/recettes-culinaires.service';

@Component({
  selector: 'app-edit-recette',
  templateUrl: './edit-recette.component.html',
  styleUrls: ['./edit-recette.component.css']
})
export class EditRecetteComponent {

  constructor(private editService:RecetteService, private route:ActivatedRoute, private router:Router, private authService:AuthService, private categorieService:CategorieService){}

  recette: Recette = {
    id: "",
    titre: "",
    description: "",
    image: "",
    ingredients: "",
    categorie: { id:"", label:""},
    feedback:""
  };

  categories:any[]=[];

  

  ngOnInit():void{
    
      this.categorieService.getCategories().subscribe({
        next:(data)=>{
          this.categories=data;
        }
      }
      )

      this.route.paramMap.subscribe({
        next:(params)=>{
          const recetteId=params.get('id');
          console.log(recetteId);
          if(recetteId){
            this.editService.getRecetteById(recetteId).subscribe({
              next:(response:any)=>{
                console.log(response);
                this.recette=response;
              }
            })
          }
        }
      })
      if (!this.authService.getIsAuthenticated()) {
        this.router.navigate(['login']);
      }

  }
  updateRecetteById(){
    return this.editService.updateRecetteById(this.recette.id, this.recette).subscribe({
      next:(r)=>{
        console.log('La recette '+r.titre+' a été modifié avec succès !');
        this.router.navigate(['list']);
      },
      error: (error) =>{
        console.log('Erreur lors de la mise à jour de la recette', error);
      }
    })
  }
  deleteRecette(id: any) {
    this.editService.deleteRecette(id).subscribe({
      next: (dp) => {
        console.log(dp);
        this.router.navigate(['list']);
      },
    })
  }
}
