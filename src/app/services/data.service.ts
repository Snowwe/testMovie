import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map, Observable, tap } from 'rxjs';
import { ITop250DataDetail } from '../interfaces/IMovie';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly baseUrl = 'https://imdb-api.com';

  constructor(
    private readonly http: HttpClient,
    private readonly errorService: ErrorService
  ) {}

  getTopMovies(): Observable<any> {
    const url = `${this.baseUrl}/en/API/Top250Movies/${environment.apiKey}`;

    return this.http.get(url).pipe(
      map((movies: any) => movies.items),
      catchError((error) => {
        this.errorService.handleError(error);
        return [];
      })
    );
  }

  getFiltredMovie(expression: string): Observable<any> {
    const url = `${this.baseUrl}/en/API/SearchMovie/${environment.apiKey}/${expression}`;

    return this.http.get(url).pipe(
      map((movies: any) => movies.results),
      catchError((error) => {
        this.errorService.handleError(error);
        return [];
      })
    );
  }
}
