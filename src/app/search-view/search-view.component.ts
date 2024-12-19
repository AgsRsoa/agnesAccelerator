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
  //protected tvShow=this.tvservice.tvShows

    protected allShows = this.tvservice.allShows


  constructor(){
    //this.onSearch(""); inutile car l'inject du service appelle le constructeur du service qui fait le fetch
  }

  onSearch(name:string, event?:Event):void{
    event?.preventDefault();
    if(name===""){
      this.tvservice.fetchMostPopularShow(1);
    }
      else{
         //this.tvShow= this.tvservice.searchTvShow(name);
        // this.allShows.tvShow = this.tvservice.searchTvShow(name)
        this.allShows().tvShow = this.tvservice.searchTvShow(name)() //Ici réassignation this.allShows().tvShow
      }
  }


}
