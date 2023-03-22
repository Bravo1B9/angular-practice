import { Component } from "@angular/core";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {

  users: object[] = [
    { id: 1, userName: 'Brav1B9' },
    { id: 2, userName: 'Brav2B9' },
    { id: 3, userName: 'Brav3B9' }
  ]

}