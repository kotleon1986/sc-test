import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/models/post.model';
import { selectSinglePost } from 'src/store/posts/posts.selectors';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  post$!: Observable<Post>

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.post$ = this.store.pipe(select(selectSinglePost));
  }
  
  goBack() {
    return this.router.navigate(['/']);
  }
}
