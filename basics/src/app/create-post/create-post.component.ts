import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html'
})
export class CreatePostComponent {

  @Output() postContent = new EventEmitter<string>();
  enteredContent: string = '';

  addContent() {
    this.postContent.emit(this.enteredContent);
    this.enteredContent = '';
  }

}