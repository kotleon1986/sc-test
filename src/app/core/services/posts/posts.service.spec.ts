import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostsService } from './posts.service';
import { Post } from '../../models/post.model';
import { postMock } from '../../utils/post.mock';
import { environment } from 'src/environments/environment';

describe('PostsService', () => {
  let service: PostsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(PostsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return single post from API', () => {
    service.fetchSinglePost(1).subscribe((post: Post) => {
      expect(post).toBeTruthy();
      expect(post).toBe(postMock);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/posts/1`);
    req.flush(postMock);
  });
});
