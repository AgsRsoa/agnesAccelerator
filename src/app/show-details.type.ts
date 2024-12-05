import { Episode } from "./episode.type";
import { Show } from "./show.type";

//ShowDetails a en commun des attributs avec Show donc extends
export interface ShowDetails extends Show {

  url:                  string;
  description:          string;
  description_source:   string;
  runtime:              number;
  youtube_link:         null;
  image_path:           string;
  rating:               string;
  rating_count:         string;
  countdown:            null | Episode;
  genres:               string[];
  pictures:             string[];
  episodes:             Episode[];
}
