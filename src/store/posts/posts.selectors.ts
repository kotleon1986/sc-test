import { createFeatureSelector, createSelector, createSelectorFactory } from "@ngrx/store";
import { PostsState } from "./posts.state";

export const selectSinglePost = createSelector(
    createFeatureSelector('posts'),
    (state: PostsState) => state.single
);

export const selectPostLoading = createSelector(
    createFeatureSelector('posts'),
    (state: PostsState) => state.loading
);