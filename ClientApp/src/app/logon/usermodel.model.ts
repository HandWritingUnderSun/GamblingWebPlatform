export class UserModel {
  username: string;
  userpassword: string;

  constructor(name: string, password: string) {
    this.username = name;
    this.userpassword = password;
  }
}
