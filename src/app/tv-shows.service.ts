import { computed, Injectable,Signal,signal } from '@angular/core';
import { Show } from './show.type';
import { HttpClient } from '@angular/common/http';
import { Data } from './data.type';
import { PopularShows, PopularShowsStatiscs } from './popular-shows.type';


@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  private tvShowSignal = signal<Show[]>([]);//Accéder à la proriété tv_shows de l'objet PopularShows
  tvShows = this.tvShowSignal.asReadonly(); /*Pour les besoins du computed signal, comme tvShowsSignal est private pas besoin d'exposer le signal en asReadonly() sinon exposer un signal en asReadonly*/

  private popularShowsSignal = signal<PopularShows>({
    total:0,
    page:0,
    pages:0,
    tv_shows:[]
  });
  popularShows = this.popularShowsSignal.asReadonly();
  private searchingSignal = signal(false);
  readonly searching = this.searchingSignal.asReadonly();
  readonly allShows = computed(()=> {
 return{
   tvShow:this.tvShows(), //Utiliser les valeurs des signaux pour qu'ils deviennent une dépendance de computed donc ()
   popularShows:this.popularShows()
 }
})
//readonly signifie pas de réassignation possible càd allShows.tvShow = qqchose Impossible


  constructor(private http: HttpClient) {
    this.fetchMostPopularShow(1) //fait un fetch a la création du service puis initialise tvShows en readOnly qui est ensuite lu par le composant search-view a son chargement

  }

  searchTvShow(name=""):Signal<Show[]>{

   // return this.http.get<Data>(`https://www.episodate.com/api/search?q=${name}&page=:page`).pipe(map(data=>data['tv_shows']))

   this.http.get<Data>(`https://www.episodate.com/api/search?q=${name}&page=1`).subscribe(data=>{
    this.searchingSignal.set(true)
     this.tvShowSignal.set(data.tv_shows)

   }
  )

    return this.tvShowSignal.asReadonly();

  }

  fetchMostPopularShow(currentPage:number):Signal<PopularShows>{ //Retourner 1 objet de type PopularShow

    this.http.get<PopularShows>(`https://www.episodate.com/api/most-popular?page=${currentPage}`).subscribe(data=>
      {
        console.log(data)
      this.popularShowsSignal.set(data)
      }


    )
    return this.popularShowsSignal
  }
}
