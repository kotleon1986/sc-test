import { Controller, Get, Param } from '@nestjs/common';
import { GetSinglePostDto } from './dto/get-single-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  list() {
    return this.postsService.getPosts();
  }

  @Get(':id')
  single(@Param() params: GetSinglePostDto) {
    return this.postsService.getPostById(params.id);
  }
}
