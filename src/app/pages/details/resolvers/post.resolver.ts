import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, tap, take } from 'rxjs';
import { Post } from 'src/app/core/models/post.model';
import { selectSinglePost } from 'src/store/posts/posts.selectors';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<Post> {
  constructor(
    private store: Store,
    private router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {
    return this.store.pipe(select(selectSinglePost))
      .pipe(
        tap((post) => {
          if (!post) {
            this.router.navigate(['/']);
            return;
          }
        }),
        take(1)
      );
  }
}
