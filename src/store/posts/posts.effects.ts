import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { fetchSinglePost, fetchSinglePostError, fetchSinglePostSuccess } from "./posts.actions";
import { map, catchError, of, mergeMap } from 'rxjs';
import { PostsService } from "src/app/core/services/posts/posts.service";
import { Post } from "src/app/core/models/post.model";
import { Router } from "@angular/router";

@Injectable()
export class PostsEffects {
    fetchSinglePost$ = createEffect(() => this.actions$.pipe(
        ofType(fetchSinglePost),
        mergeMap((actions) => this.postsService.fetchSinglePost(actions.id).pipe(
            map((post: Post) => {
                this.router.navigate(['/details']);
                return fetchSinglePostSuccess(post);
            }),
            catchError(() => of(fetchSinglePostError()))
        ))
    ));

    constructor(
        private actions$: Actions,
        private router: Router,
        private postsService: PostsService
    ) {}
}

