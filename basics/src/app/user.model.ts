export class UserModel {
  constructor(id: number, userName: string) {
    this.id = id;
    this.userName = userName;
  }

  id: number;
  userName: string;
}