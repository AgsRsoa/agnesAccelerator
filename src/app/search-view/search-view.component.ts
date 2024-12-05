import { Component, inject,OnInit,Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TvShowTableComponent} from '../tv-show-table/tv-show-table.component';
import { TvShowsService } from '../tv-shows.service';
import { Show } from '../show.type';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, TvShowTableComponent],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent{

  protected tvservice = inject(TvShowsService);
  protected tvShow! :Signal<Show[]>; // ! tell TypeScript that you are certain the tvShow property will be initialized at some point before it is accessed
//pas d'initialisation avec valeur par défaut ou d'initialisation dans le constructeur
  constructor(){
    this.onSearch();
  }
  /*ngOnInit(): void {
    this.onSearch("");
  }
    */
  onSearch(name="", event?:Event):void{
    event?.preventDefault();
   this.tvShow= this.tvservice.searchTvShow(name);

  }
}
