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

  categories: Categorie[] = [];

  constructor(
    private router: Router,
    private recetteService: RecetteService,
    private categorieService: CategorieService  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categorieService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      }
    });
  }
  addRecette() {
    if (this.recette && this.recette.titre && this.recetteService) {      
        this.recetteService.addRecette(this.recette).subscribe({
          next: (r) => {
            console.log('La recette ' + r.titre + ' a été ajoutée avec succès !');
            this.router.navigate(['list']);
          },  
          error: (err) => {
            if (err.status === 401) {
              console.error('Vous n\'êtes pas autorisé à ajouter une recette. Veuillez vous connecter.');
            } else {
              console.error('Erreur lors de l\'ajout de la recette:', err);
            }          }
        });
      } else {
        console.error('La recette est invalide. Assurez-vous que toutes les propriétés requises sont définies.');
      }
  }
  

}
