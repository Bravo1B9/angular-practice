import { Component } from "@angular/core";
import { PostModel } from "../post.model";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent {

  posts: PostModel[] = []; 

  addPost(content: string) {
    const id = this.posts.length + 1;
    const newPost = new PostModel(id, content);
    this.posts.push(newPost);
  }

}