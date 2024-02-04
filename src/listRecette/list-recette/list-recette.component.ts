import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/service/categorie.service';

import { RecetteService } from 'src/service/recettes-culinaires.service';

@Component({
  selector: 'app-list-recette',
  templateUrl: './list-recette.component.html',
  styleUrls: ['./list-recette.component.css']
})
export class ListRecetteComponent {

  constructor(private service:RecetteService, private router:Router, private categorieService:CategorieService){}

  myCategorie:any;
  recettes:any;
  responsiveOptions: any[] | undefined;
  ngOnInit():void{
    this.categorieService.getCategories().subscribe((data)=>{
      this.myCategorie=data;
    })
    this.service.getRecettes().subscribe((data)=>{
      console.log(data);
      this.recettes=data;
      console.log(this.recettes);
      
    })
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
  getSeverity(status: string):any{
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
    }
}
}
