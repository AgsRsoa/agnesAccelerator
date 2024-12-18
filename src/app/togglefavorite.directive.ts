import { Directive, HostBinding, HostListener, inject, Input} from '@angular/core';
import { Show } from './show.type';
import { FavoritesService } from './favorites.service';

@Directive({
  selector: '[appTogglefavorite]',
  standalone: true
})
export class TogglefavoriteDirective {

  private favoriteService = inject(FavoritesService)
  @Input({required:true, alias:'appTogglefavorite'}) /*alias:'appTogglefavorite' alias avec le même nom que le selector. L'alias permet l'utilisation de la syntaxe [appTogglefavorite]="tvShowDetails.id" dans le template HTML du composant qui utilise la directive.Cela siginifie l'id est un Input pour la directive*/
  showId! : Show["id"]

  @HostBinding('class.highlight')
  //bookmarkClass="icon-bookmark highlight"; //Sous cette forme = une propriété statique. On veut plutôt appeler du code.
  get isFavorite(){
    return this.favoriteService.favoritesShows().includes(this.showId)
  }

  constructor() { }

 @HostListener('click')
  onClick(){
    this.favoriteService.toggleFavorite(this.showId)

  }
 }
