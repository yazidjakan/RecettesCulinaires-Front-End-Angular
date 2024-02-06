import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRecetteComponent } from 'src/listRecette/list-recette/list-recette.component';
import { FormsModule } from '@angular/forms';
import { RecetteModule } from 'src/Recette-module/recette/recette.module';
import { UtilisateurModule } from 'src/Recette-module/utilisateur/utilisateur.module';
import { AuthGuardServiceComponent } from 'src/login/auth-guard-service/auth-guard-service.component';
import { HomeComponent } from 'src/home/home/home.component';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { MenubarModule } from 'primeng/menubar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from 'src/security/jwt-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthGuardServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecetteModule,
    UtilisateurModule,
    ButtonModule,
    DataViewModule,
    MenubarModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
