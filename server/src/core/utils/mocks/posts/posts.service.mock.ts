import { PostsService } from '../../../../modules/posts/posts.service';
import { postMock } from './post.mock';

export const postsServiceMock = {
  provide: PostsService,
  useFactory: () => ({
    getPosts: jest.fn(() => [postMock]),
    getPostById: jest.fn(() => postMock),
  }),
};
