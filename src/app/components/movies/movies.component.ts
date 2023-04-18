import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { IMovie, IMovieItem, ITop250DataDetail } from '../../interfaces/IMovie';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<IMovie[]> = of([]);

  constructor(private readonly dataService: DataService) {}

  ngOnInit() {
    this.movies$ = this.dataService.getTopMovies().pipe(
      map((movies: IMovieItem[]) =>
        movies.map((movie) => ({
          id: movie.id,
          title: movie.title,
          year: movie.year,
          imDbRating: movie.imDbRating,
        }))
      )
    );
  }
}
