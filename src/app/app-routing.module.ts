import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecetteComponent } from 'src/addRecette/add-recette/add-recette.component';
import { EditRecetteComponent } from 'src/editRecette/edit-recette/edit-recette.component';
import { ListRecetteComponent } from 'src/listRecette/list-recette/list-recette.component';
import { AuthGuardServiceComponent } from 'src/login/auth-guard-service/auth-guard-service.component';
import { AuthGuard } from 'src/service/auth.guard';
import { UserFormComponent } from 'src/user-form/user-form/user-form.component';

const routes: Routes = [
  { path: 'list', component: ListRecetteComponent, canActivate:[AuthGuard]},
  { path: 'inscription', component: UserFormComponent},
  { path: 'add', component: AddRecetteComponent, canActivate:[AuthGuard]},
  { path:'edit/:id', component:EditRecetteComponent, canActivate:[AuthGuard]},
  { path:'login', component:AuthGuardServiceComponent},
  { path:'', redirectTo:'login', pathMatch:'full'},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
