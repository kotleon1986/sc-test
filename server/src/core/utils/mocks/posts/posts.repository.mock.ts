import { PostsRepository } from '../../../../modules/posts/repositories/posts.repository';
import { postMock } from './post.mock';

export const postsRepositoryMock = {
  provide: PostsRepository,
  useFactory: () => ({
    findAll: jest.fn(() => [postMock]),
    findOne: jest.fn(() => postMock),
  }),
};
