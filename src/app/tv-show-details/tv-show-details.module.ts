import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowDetailsComponent } from './tv-show-details.component';



@NgModule({
  declarations: [TvShowDetailsComponent],
  imports: [
    CommonModule, TvShowDetailsModule
  ]
})
export class TvShowDetailsModule { }
