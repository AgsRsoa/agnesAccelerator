import { Show } from "./show.type";

export interface PopularShows {

    total:    number;
    page:     number;
    pages:    number;
    tv_shows: Show[];
}

export type PopularShowsStatiscs = Omit<PopularShows,'tv_shows'> //Omit permet de créer un type avec moins de pptés
