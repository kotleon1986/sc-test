import { createReducer, on } from "@ngrx/store";
import { fetchSinglePost, fetchSinglePostError, fetchSinglePostSuccess } from "./posts.actions";
import { postsInitialState } from "./posts.state";

export const postsReducer = createReducer(
    postsInitialState,
    on(fetchSinglePost, (state) => state = { ...state, loading: true }),
    on(fetchSinglePostSuccess, (state, post) => state = { ...state, loading: false, single: post }),
    on(fetchSinglePostError, (state) => state = { ...state, loading: false }),
);
