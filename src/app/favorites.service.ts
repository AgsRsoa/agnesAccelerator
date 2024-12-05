import { effect, inject, Injectable, signal } from '@angular/core';
import { Show } from './show.type';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { TvShowDetailsService } from './tv-show-details.service';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
//Pour le composant seul sont exposés : favoritesShows et toggleFavorite

//1
  private storageService = inject(StorageService<Array<Show["id"]>>);
  private favoritesSignal = signal<Array<Show["id"]>>(this.storageService.getLocalStorage("favorites"))
  readonly favoritesShows = this.favoritesSignal.asReadonly(); //readonly pour que le composant qui l'utilise ne puisse pas set la valeur mais seulement le favorite service peut le faire


  //3 A chaque modification du signal par toggleFavorite, on veut màj le storage avec la nouvelle valeur du signal via le constructeur
  constructor(private http:HttpClient) {
    // effect équivaut à un event listener, écoute les changements du signal et set le local storage de la clef correspondante
   effect(()=>{
      this.storageService.setLocalStorage("favorites",this.favoritesSignal())

    })
  }

  //2
   toggleFavorite(showId:Show["id"]){
    //Si l'id n'existe pas je l'ajoute
    //si l'id existe je l'enlève

   if(this.favoritesSignal().indexOf(showId) !== -1){ //si renvoie un index pas négatif => existe
    this.favoritesSignal.update(shows => shows.filter(s => s != showId ))
    // this.storageService.setLocalStorage("favorites",this.favoritesSignal()) PAS ICI DANS LE CONSTRUCTEUR POUR ETRE SUR QU'EXECUTE A CHAQUE CHGT
   }
   else
   this.favoritesSignal.update(shows => [...shows,showId])
    // this.storageService.setLocalStorage("favorites",this.favoritesSignal()) PAS ICI DANS LE CONSTRUCTEUR POUR ETRE SUR QU'EXECUTE A CHAQUE CHGT

   }

    /*TODO : Cache let subject = new ReplaySubject<Array<ShowDetails>>(this.favoritesShows().length)
    subject.asObservable().subscribe()
    //TODO : appel HTTP uniquement au changement de this.favoritesSignal()
    */








}
