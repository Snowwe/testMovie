import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

interface ISearchGroup {
  title: FormControl;
  year: FormControl;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  searchForm: FormGroup = new FormGroup<ISearchGroup>({
    title: new FormControl(''),
    year: new FormControl(''),
  });

  constructor(private readonly router: Router) {}

  ngOnInit() {
    this.searchForm.valueChanges.subscribe();
  }

  search() {
    const queryParams = {
      title: this.searchForm.get('title')?.value || '',
      year: this.searchForm.get('year')?.value || '',
    };

    this.router.navigate(['/results'], { queryParams });
  }
}
