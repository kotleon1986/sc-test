import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { postsRepositoryMock } from '../../core/utils/mocks/posts/posts.repository.mock';
import { postMock } from '../../core/utils/mocks/posts/post.mock';
import { PostsRepository } from './repositories/posts.repository';
import {
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';

describe('PostsService', () => {
  let service: PostsService;
  let repo: PostsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService, postsRepositoryMock],
    }).compile();

    service = module.get<PostsService>(PostsService);
    repo = module.get<PostsRepository>(PostsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getPosts', () => {
    it('should return all posts', () => {
      const result = service.getPosts();

      expect(result).toHaveLength(1);

      expect(result[0]).toBe(postMock);
    });
  });

  describe('getPostById', () => {
    it('should return single post by id', () => {
      const result = service.getPostById(1);

      expect(result).toBe(postMock);
    });

    it('should throw not found exception if post not exists', () => {
      jest.spyOn(repo, 'findOne').mockImplementationOnce(() => null);

      try {
        service.getPostById(1);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });

    it('should throw unprocessable entity exception if post is missing fields', () => {
      jest.spyOn(repo, 'findOne').mockImplementationOnce(() => ({
        ...postMock,
        title: null,
      }));

      try {
        service.getPostById(1);
      } catch (error) {
        expect(error).toBeInstanceOf(UnprocessableEntityException);
      }
    });
  });
});
