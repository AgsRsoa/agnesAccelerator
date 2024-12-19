import { Component, inject, Input, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Show } from '../show.type';
import { StorageService } from '../storage.service';
import { FavoritesService } from '../favorites.service';
import { RouterLink} from '@angular/router';
import { TogglefavoriteDirective } from '../togglefavorite.directive';
import { PopularShows } from '../popular-shows.type';
import { PaginatorComponent } from '../paginator/paginator.component';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule, RouterLink, TogglefavoriteDirective, PaginatorComponent],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent {

 //Ce composant reçoit simplement le signal du composant search-view (=le container) qui lui interargit avec le service qui lui est injecté
  @Input() //pour recevoir la donnée du parent
  popularShows!:PopularShows // shows!:Show[]

  @Input()
  shows!:Show[]

  @Input()
  allShows!:Signal<{
    tvShow:Show[],
    popularShows:PopularShows
  }>

  showId!:Show["id"]

  @Input()
  isSearching!:boolean

 // protected storageService= inject(StorageService<Array<Show["id"]>>);

  //Avec la custom directive toggleFavorite qui gère l'ajout d'un favori au clic et le highlight du bookmark, plus besoin d'injecter de service
  //protected favoriteService =inject(FavoritesService);




/* Non dans le template appeler directement le service.toogleFavorite(id)
  favorite(showId:Show["id"]){
    this.favoriteService.toggleFavorite(showId)
    //console.log(this.favoriteService.favoritesShows())
  }*/
}
