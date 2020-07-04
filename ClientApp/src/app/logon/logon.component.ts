import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-logon-data',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent {
  public usermodel: UserModel;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<UserModel>(baseUrl + 'api/UserModelController/UserModel').subscribe(result => {
      this.usermodel = result;
    }, error => console.error(error));
  }
}

interface UserModel {
  username: string;
  userpassword: string;
}
