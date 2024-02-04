import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRecetteComponent } from 'src/listRecette/list-recette/list-recette.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RecetteService } from 'src/service/recettes-culinaires.service';
import { AddRecetteComponent } from 'src/addRecette/add-recette/add-recette.component';
import { EditRecetteComponent } from 'src/editRecette/edit-recette/edit-recette.component';
import { RouterModule } from '@angular/router';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { FileUploadModule } from 'primeng/fileupload';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    ListRecetteComponent,
    AddRecetteComponent,
    EditRecetteComponent
  ],
  providers:[
    RecetteService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    DataViewModule,
    TableModule,
    ButtonModule,
    TagModule,
    FileUploadModule,
    CarouselModule,
    CardModule
  ]
})
export class RecetteModule { }
