import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from 'src/user-form/user-form/user-form.component';
import { UtilisateurService } from 'src/service/utilisateur.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AuthGuardServiceComponent } from 'src/login/auth-guard-service/auth-guard-service.component';



@NgModule({
  declarations: [
    UserFormComponent
  ],
  providers:[UtilisateurService],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ]
})
export class UtilisateurModule { }
