import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-logon-data',
  templateUrl: './logon.component.html'
})
export class LogonComponent {
  public logonmodel: LogonModel;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<LogonModel>(baseUrl + 'logonmodel').subscribe(result => {
      this.logonmodel = result;
    }, error => console.error(error));
  }
}

interface LogonModel {
  username: string;
  userpassword: string;
}
