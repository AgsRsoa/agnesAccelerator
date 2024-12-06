import { Pipe, PipeTransform } from '@angular/core';
import { ShowDetails } from './show-details.type';

@Pipe({
  name: 'countdown',
  standalone: true
})
export class CountdownPipe implements PipeTransform {
//Création d'un custom pipe pour éviter de transformer l'objet JSON reçu, juste utiliser un pipe pour modifier l'affichage des infos
  transform(value:ShowDetails ): any {
    if(value.status ==="Ended" || value.status ==="Canceled/Ended")
       return "The show has ended";


  }

  /* If there is a countdown to the next episode, the pipe should return "Next episode in 5 days".
  If the show is canceled or ended, return "The show has ended".
  If the show is still running or undetermined, display the show status and then "but no next episode date" (see image above for examples).
   */

}