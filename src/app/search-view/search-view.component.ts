import { Component, inject,OnInit,Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TvShowTableComponent} from '../tv-show-table/tv-show-table.component';
import { TvShowsService } from '../tv-shows.service';
import { Show } from '../show.type';
import { PaginatorComponent } from '../paginator/paginator.component';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, TvShowTableComponent],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent{ //Container component has the business logic interact with service

  protected tvservice = inject(TvShowsService);
  //protected tvShow! :Signal<Show[]>; // ! tell TypeScript that you are certain the tvShow property will be initialized at some point before it is accessed
  protected tvShow=this.tvservice.tvShows
  /* protected allShows = {
    tvShow:this.tvservice.tvShows,//tvShows est asReadonly mais reste un Signal<Show[]>
    popularShows:this.tvservice.popularShows
  } */

    protected allShows = this.tvservice.allShows
  //pas d'initialisation avec valeur par défaut ou d'initialisation dans le constructeur
  constructor(){
    //this.onSearch("");
  }

  onSearch(name:string, event?:Event):void{
    event?.preventDefault();
    if(name===""){
      this.tvservice.fetchMostPopularShow(1);
    }
      else{
         //this.tvShow= this.tvservice.searchTvShow(name);
        // this.allShows.tvShow = this.tvservice.searchTvShow(name)
        this.allShows().tvShow = this.tvservice.searchTvShow(name)
      }



  }
}
