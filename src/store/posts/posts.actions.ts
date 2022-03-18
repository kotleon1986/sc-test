import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/core/models/post.model";

export enum PostsActionsTypes {
    FETCH_POST = '[Posts] Fetch Post',
    FETCH_POST_SUCCESS = '[Posts] Fetch Post Success',
    FETCH_POST_ERROR = '[Posts] Fetch Post Error'
}

export const fetchSinglePost = createAction(PostsActionsTypes.FETCH_POST, props<{ id: number }>())
export const fetchSinglePostSuccess = createAction(PostsActionsTypes.FETCH_POST_SUCCESS, props<Post>())
export const fetchSinglePostError = createAction(PostsActionsTypes.FETCH_POST_ERROR)
