export interface IMovie {
  id: string;
  title: string;
  year: string;
  imDbRating: string;
}

export interface ITop250DataDetail {
  errorMessage: string;
  items: IMovieItem[];
}

export interface IMovieItem {
  id: string;
  rank: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
}

export interface ISearchMovie {
  id: string;
  resultType: string;
  image: string;
  title: string;
  description: string;
}
