import { Test, TestingModule } from '@nestjs/testing';
import { PostsRepository } from './posts.repository';

describe('PostsRepository', () => {
  let repo: PostsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsRepository],
    }).compile();

    repo = module.get<PostsRepository>(PostsRepository);
  });

  it('should return posts repository instance', () => {
    expect(repo).toBeDefined();

    expect(repo).toBeInstanceOf(PostsRepository);
  });

  it('should return all posts', () => {
    const result = repo.findAll();

    expect(result).toHaveLength(11);
  });

  it('should return all posts', () => {
    const result = repo.findOne(1);

    expect(result).toBeTruthy();
  });
});
