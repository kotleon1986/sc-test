import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { PostResolver } from './resolvers/post.resolver';

const routes: Routes = [
  {
    path: '',
    component: DetailsComponent,
    resolve: {
      post: PostResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
