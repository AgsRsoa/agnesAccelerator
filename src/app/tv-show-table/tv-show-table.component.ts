import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Show } from '../show.type';
import { StorageService } from '../storage.service';
import { FavoritesService } from '../favorites.service';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent {



  protected storageService= inject(StorageService<Array<Show["id"]>>);
  protected favoriteService =inject(FavoritesService);
  //Ce composant reçoit simplement le signal du composant search-view (=le container) qui lui interargit avec le service qui lui est injecté
  @Input() //pour recevoir la donnée du parent
  shows!:Show[]

  showId!:Show["id"]


/* Non dans le template appeler directement le service.toogleFavorite(id)
  favorite(showId:Show["id"]){
    this.favoriteService.toggleFavorite(showId)
    //console.log(this.favoriteService.favoritesShows())
  }*/
}
