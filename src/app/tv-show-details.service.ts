import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal } from '@angular/core';
import { ShowDetails } from './show-details.type';
import { Show } from './show.type';
import { forkJoin, map, Observable, shareReplay } from 'rxjs';
import { FavoritesService } from './favorites.service';


@Injectable({
  providedIn: 'root'
})
export class TvShowDetailsService {

 favoritesShows = inject(FavoritesService).favoritesShows
 restFavoritesShowsDetails :Observable<ShowDetails>[] = [];
 favoritesShowsDetailsSignal = signal<Array<ShowDetails>>([]);
 favoritesShowsDetails = this.favoritesShowsDetailsSignal.asReadonly();

 sortedFavoritesShows : Array<Date> = [];

  constructor(private http:HttpClient) { this.fetchFavoritesShowsDetails()}



  //Decimal and Date pipes
  getShowDetails(showId:Show["id"]): Observable<ShowDetails>{
    /*l'api retourne un objet avec 1 propriété tvShow de type ShowDetails :
    {
    tvShow:{"id":,"name":,"permalink":, ...}
    }
    donc  get<{tvShow: ShowDetails}>
    */
    return this.http.get<{tvShow: ShowDetails}>(`https://www.episodate.com/api/show-details?q=${showId}`).pipe(map( data => data.tvShow))
  }


   /*
    Récupérer la liste d'id des favoris this.favoritesShows(), requêtes pour chacun de ces id et forkJoin
   */
fetchFavoritesShowsDetails():Signal<Array<ShowDetails>>{
//Transforme chaque id en favori en requête regroupée sous forme de tableau
  this.restFavoritesShowsDetails = this.favoritesShows().map(showId =>
    this.http.get<{tvShow:ShowDetails}>(`https://www.episodate.com/api/show-details?q=${showId}`).pipe(map(s => s.tvShow),shareReplay(1))
)
//forkJoin : Prend le tableau de requete et fait une unique requête
 //forkJoin : prend en param array d'Observables et renvoie 1 Observable de type Array sur lequel subscribe
  forkJoin(this.restFavoritesShowsDetails).subscribe(arrayFavoritesShowInfos => {
    console.log(arrayFavoritesShowInfos)
    this.favoritesShowsDetailsSignal.set(arrayFavoritesShowInfos)
    })
  return this.favoritesShowsDetailsSignal
}

/* TODO : Cache let subject = new ReplaySubject<Array<ShowDetails>>(this.favoritesShows().length)
    subject.asObservable().subscribe() */
}

/**.sort((s1,s2)=>{
  // return -1 pour celui qu'on veut placer en 1er . Si a < b return -1
 if(s1.status === "Running" && s2.status !== "Running"){
    return -1 //s1 placé avant s2
  }
  if(s1.status === "Ended" || s1.status === "Canceled/Ended"){
    return 1 //s1 placé après s2
  }
  if(s1.coutdown && s2.countdown && s1.episodes.at(-1)!.air_date < s2.episodes.at(-1)!.air_date){
    return -1
  }
  return 0
//If both show1 and show2 have a countdown, the one with the earlier air_date is placed first. (return -1 for earlier date)
  }) */
