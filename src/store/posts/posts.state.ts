import { Post } from "src/app/core/models/post.model";

export interface PostsState {
    loading: boolean;
    single: Post;
}

export const postsInitialState: PostsState = {
    loading: false,
    single: null!
}