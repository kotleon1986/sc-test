import { Test, TestingModule } from '@nestjs/testing';
import { postsServiceMock } from '../../core/utils/mocks/posts/posts.service.mock';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

describe('PostsController', () => {
  let controller: PostsController;
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [postsServiceMock],
    }).compile();

    controller = module.get<PostsController>(PostsController);
    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('list', () => {
    it('should return all posts', () => {
      controller.list();

      expect(service.getPosts).toBeCalled();
    });
  });

  describe('single', () => {
    it('should return single post by id', () => {
      controller.single({ id: 1 });

      expect(service.getPostById).toBeCalled();
    });
  });
});
