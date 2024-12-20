import { Component, Input } from '@angular/core';
import { ShowDetails } from '../show-details.type';
import { TogglefavoriteDirective } from '../togglefavorite.directive';
import { CountdownPipe } from '../countdown.pipe';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CountdownPipe,TogglefavoriteDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {


  @Input({required:true})
  tvShowDetails! : ShowDetails;

  @Input()
  title!:string
}
