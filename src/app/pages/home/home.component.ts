import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchSinglePost } from 'src/store/posts/posts.actions';
import { selectPostLoading } from 'src/store/posts/posts.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public loading$!: Observable<boolean>;

  public name = new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.min(1)
    ]
  );

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(selectPostLoading));
  }

  fetchPost() {
    if (this.name.valid) {
      this.store.dispatch(fetchSinglePost({ id: +this.name.value }));
    }
  }
}
