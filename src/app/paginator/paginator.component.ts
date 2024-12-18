import { Component, inject, Input } from '@angular/core';
import { PopularShows } from '../popular-shows.type';
import { TvShowsService } from '../tv-shows.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {

  protected tvService = inject(TvShowsService)
  @Input()
  popularShows!:PopularShows;//lie le composant aux popular shows


  firstButton(){
    this.tvService.fetchMostPopularShow(1)
  }

  secondButton(currentPage:number){
    this.tvService.fetchMostPopularShow(currentPage -1)

  }

thirdButton(currentPage:number){
  this.tvService.fetchMostPopularShow(currentPage +1)

}


fourthButton(){
  this.tvService.fetchMostPopularShow(this.popularShows.pages)
}


}
