import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { BehaviorSubject, combineLatest, map, Observable, of, tap } from 'rxjs';
import { ISearchMovie } from '../../interfaces/IMovie';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  title = '';
  year = '';
  filteredMovies$: Observable<ISearchMovie[]> = of([]);

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.title = this.route.snapshot.queryParamMap.get('title') || '';
    this.year = this.route.snapshot.queryParamMap.get('year') || '';

    this.getData();
  }

  private getData() {
    this.filteredMovies$ = this.dataService.getFiltredMovie(
      `${this.title} ${this.year}`
    );
  }
}
