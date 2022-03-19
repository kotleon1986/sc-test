import { Post } from './post.entity';

describe('Post', () => {
  it('should create export new Post instance', () => {
    const post = new Post();
    expect(post).toBeInstanceOf(Post);
  });
});
