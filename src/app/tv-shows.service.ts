import { Injectable,Signal,signal } from '@angular/core';
import { Show } from './show.type';
import { HttpClient } from '@angular/common/http';
import { Data } from './data.type';


@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  private tvShowSignal = signal<Show[]>([]);
  constructor(private http: HttpClient) { }

  searchTvShow(name=""):Signal<Show[]>{

   // return this.http.get<Data>(`https://www.episodate.com/api/search?q=${name}&page=:page`).pipe(map(data=>data['tv_shows']))
    this.http.get<Data>(`https://www.episodate.com/api/search?q=${name}&page=1`).subscribe(data=>this.tvShowSignal.set(data.tv_shows))
   return this.tvShowSignal.asReadonly();

  }
}
