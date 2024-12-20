import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../favorites.service';
import { ShowDetails } from '../show-details.type';
import { CountdownPipe } from '../countdown.pipe';
import { TogglefavoriteDirective } from '../togglefavorite.directive';
import { CardComponent } from '../card/card.component';



@Component({
  selector: 'app-favorite-card',
  standalone: true,
  imports: [RouterLink, CountdownPipe, TogglefavoriteDirective,CardComponent,CommonModule ],//Comme composant standalone possibilité d'importer plusieurs types : directive,pipe et module.Commonmodule inutile ici. Imports dependances du template
  templateUrl: './favorite-card.component.html',
  styleUrl: './favorite-card.component.css'
})
export class FavoriteCardComponent {

  //protected favoriteService = inject(FavoritesService); Plus besoin d'injecter le service car la directive customisée toggleFavorite s'occupe de l'ajout en favori et du colori jaune du bookmark dans le template
/*
  @Input({required:true})
  tvShowDetails! : ShowDetails; */

  @Input({required:true})
  showDetails!:ShowDetails[]
}
