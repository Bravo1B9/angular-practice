import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html'
})
export class CreateUserComponent {

  @Output() usernameAdd = new EventEmitter<string>();
  enteredUsername = '';

  onAddUser() {
    console.log(`User ${this.enteredUsername} added.`);
    this.usernameAdd.emit(this.enteredUsername);
    this.enteredUsername = '';
  }

}