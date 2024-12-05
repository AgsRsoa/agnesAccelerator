import { effect, Injectable, signal } from '@angular/core';
import { Show } from './show.type';

@Injectable({
  providedIn: 'root'
})
export class StorageService<T> {

  // I) Créer ce storage service le plus générique pour être réutilisé avec n'importe quel type

//2) Initialisation avec les valeurs déjà existantes ou un tableau vide.

  constructor() { }

  getLocalStorage(keyName:string):T{
    return JSON.parse(localStorage.getItem(keyName) ?? "[]") as T //Nullish Coaslescing pour valeur retournant null ou undefined permet de fournir une valeur par défaut
  }

//1) A chaques chgt d'un elt,change la valeur du signal
  setLocalStorage(keyName:string,data:T):void{
    localStorage.setItem(keyName, JSON.stringify(data))
  }


  }
