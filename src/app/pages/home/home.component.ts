import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { fetchSinglePost } from 'src/store/posts/posts.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public searchForm!: FormGroup
  public name = new FormControl(
    '', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.min(1)
    ]
  );

  constructor(private store: Store) { }

  ngOnInit(): void {    
  }

  onSubmit() {
    if (this.name.valid) {
      this.store.dispatch(fetchSinglePost({ id: +this.name.value }));
    }
  }
}
