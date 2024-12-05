import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../favorites.service';
import { ShowDetails } from '../show-details.type';

@Component({
  selector: 'app-favorite-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './favorite-card.component.html',
  styleUrl: './favorite-card.component.css'
})
export class FavoriteCardComponent {

  protected favoriteService = inject(FavoritesService);

  @Input({required:true})
  tvShowDetails! : ShowDetails;

}
