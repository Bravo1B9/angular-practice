import { Component } from "@angular/core";
import { PostModel } from "../post.model";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent {s

  posts: PostModel[] = []; 



}