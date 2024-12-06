import { Directive, HostBinding, HostListener, inject, Input} from '@angular/core';
import { Show } from './show.type';
import { FavoritesService } from './favorites.service';

@Directive({
  selector: '[appTogglefavorite]',
  standalone: true
})
export class TogglefavoriteDirective {

  private favoriteService = inject(FavoritesService)
  @Input()
  showId! : Show["id"]

  @HostBinding('class')
  bookmarkClass="icon-bookmark highlight";

  constructor() { }

 @HostListener('click')
  onClick(){
    this.favoriteService.toggleFavorite(this.showId)

  }
 }
