import { Component } from "@angular/core";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {

  users: object[] = [
    { id: 1, userName: 'Bravo1B9' },
    { id: 2, userName: 'Bravo2B9' },
    { id: 3, userName: 'Bravo3B9' }
  ];

  onUserAdded(userName: string) {
    const id = this.users.length + 1;
    const newUser = { id: id, userName: userName };
    this.users.push(newUser);
  }

}