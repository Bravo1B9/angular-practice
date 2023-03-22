import { Component } from "@angular/core";
import { UserModel } from "../user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {

  users: UserModel[] = [];

  addUser(userName: string) {
    const id = this.users.length + 1;
    const newUser = new UserModel(id, userName);
    this.users.push(newUser);
  }

}