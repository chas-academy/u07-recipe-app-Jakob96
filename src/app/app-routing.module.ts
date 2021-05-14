import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowRecipeComponent } from './show-recipe/show-recipe.component';
import { SavedRecipesListComponent } from './saved-recipes-list/saved-recipes-list.component';
import { AddRecipeListComponent } from './add-recipe-list/add-recipe-list.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { SaveRecipeComponent } from './save-recipe/save-recipe.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './auth/auth.guard';

//Handles the available url:s
const routes: Routes = [
  { path: '', component:  HomeComponent },    //Root component
  { path: 'recipe/:id', component: ShowRecipeComponent },
  { path: 'lists', component: SavedRecipesListComponent, canActivate: [AuthGuard] },
  { path: 'list/:id', component: SavedRecipesComponent, canActivate: [AuthGuard] },
  { path: 'save-recipe/:id', component: SaveRecipeComponent , canActivate: [AuthGuard]},
  { path: 'add-list/:id/:method', component: AddRecipeListComponent, canActivate: [AuthGuard] },
  { path: 'add-list', component: AddRecipeListComponent, canActivate: [AuthGuard] },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: ErrorComponent },  //If no route match, display the error component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
