import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PostsRepository } from './repositories/posts.repository';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  getPosts() {
    return this.postsRepository.findAll();
  }

  getPostById(id: number) {
    const post: Post = this.postsRepository.findOne(id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }

    if (!post.title || !post.body) {
      throw new UnprocessableEntityException('Post is missing some fields');
    }

    return post;
  }
}
