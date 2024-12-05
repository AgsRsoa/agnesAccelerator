import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { ShowDetails } from './show-details.type';
import { inject } from '@angular/core';
import { TvShowDetailsService } from './tv-show-details.service';
import { Observable } from 'rxjs';

/*Resolver :
Pour afficher des données peu nombreuses avant l'affichage du composant. Le composant s'affiche alors avec les données récupérées par le resolver.
Fonction avec injection de service
Pas d'abonnements, d'async, de signaux
Retourne un Observable
Données récupérées passées au composant cible avec un @Input. Ce composant est alors réutilisable autrement.
*/
export function showDetailsResolver (route : ActivatedRouteSnapshot):Observable<ShowDetails> {
  const urlshowId = Number(route.paramMap.get("id"))
  return inject(TvShowDetailsService).getShowDetails(urlshowId);
};
