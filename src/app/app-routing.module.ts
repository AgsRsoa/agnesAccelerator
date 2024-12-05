import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchViewComponent} from './search-view/search-view.component';
import {FavoritesViewComponent} from "./favorites-view/favorites-view.component";
import { showDetailsResolver } from './show-details.resolver';

//Route Configuration: Adds the resolve property in the route definition to link the resolver service.

const routes: Routes = [
  {path: "", component: SearchViewComponent},
  {path: "favorites", component: FavoritesViewComponent},
  {path:"showDetails/:id", resolve: {showDetails : showDetailsResolver }, loadComponent: () => import('../app/tv-show-details/tv-show-details.component').then(mod => mod.TvShowDetailsComponent)},
  {path:"home",component: SearchViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {bindToComponentInputs:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
