import { Component } from "@angular/core";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html'
})
export class CreateUserComponent {

  enteredUsername = '';

  onAddUser() {
    console.log(`User ${this.enteredUsername} added.`);
  }

}