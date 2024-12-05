import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowDetailsComponent } from './tv-show-details.component';


const routes: Routes = [{
  path:'',
  component: TvShowDetailsComponent
}]


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TvShowDetailsRoutingModule { }
