import { Component, inject, input, Input } from '@angular/core';
import { ShowDetails } from '../show-details.type';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TvShowDetailsService } from '../tv-show-details.service';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-tv-show-details',
  standalone: true,
  imports: [RouterLink, RouterOutlet, DatePipe,DecimalPipe], //Ce composant est standalone donc importer les pipes et directives qui seront utilisées. DatePipe et DecimalPipe sont standalone.
  templateUrl: './tv-show-details.component.html',
  styleUrl: './tv-show-details.component.css',

})
export class TvShowDetailsComponent { //export class default

  @Input()
  showDetails!:ShowDetails // Pas d'Observable c'est le router qui le fait

episodesCount!:number

protected tvshowdetailsservice = inject(TvShowDetailsService);
constructor(){} //private activatedRoute: ActivatedRoute
  //Component Access: Access the resolved data using ActivatedRoute.
 /* ngOnInit(){
    this.activatedRoute.data.subscribe(
      (details)=>{

    })
  }*/

totalSeasons(){
 this.showDetails.episodes.forEach(e => {
  let count = 0;
  if(e.season != count){
    count += e.season
  }
  return this.episodesCount = count
 });


  }
//Faire les appels de méthodes, subscribe, console.log dans ngOnInit
ngOnInit(){
  this.totalSeasons()
  console.log(this.showDetails)
}


}
