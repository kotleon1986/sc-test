import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { fetchSinglePost, fetchSinglePostError, fetchSinglePostSuccess, PostsActionsTypes } from "./posts.actions";
import { map, tap, catchError, of, switchMap } from 'rxjs';
import { PostsService } from "src/app/core/services/posts/posts.service";
import { Post } from "src/app/core/models/post.model";
import { Router } from "@angular/router";

@Injectable()
export class PostsEffects {
    fetchSinglePost$ = createEffect(() => this.actions$.pipe(
        ofType(fetchSinglePost),
        switchMap((action) => this.postsService.fetchSinglePost(action.id)),
        tap(() => this.router.navigate(['/details'])),
        map((post: Post) => fetchSinglePostSuccess(post)),
        catchError(() => of(fetchSinglePostError()))
    ));

    constructor(
        private actions$: Actions,
        private router: Router,
        private postsService: PostsService
    ) {}
}

