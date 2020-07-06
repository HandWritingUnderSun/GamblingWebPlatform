import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-logon-data',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {
  usermodel: UserModel;
  usermodel2: UserModel;
  usermodelservice: UserModelService;
  usermodelurl: string;
  private config = { responseType: 'UserModel' };

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.usermodelurl = baseUrl + 'api/UserModelController/UserModel';
    this.getUserModel();
    http.get<UserModel>(baseUrl + 'api/UserModelController/UserModel').subscribe(result => {
      this.usermodel = {"username":"123","userpassword":"123"};
      alert(this.usermodel);
      //alert(JSON.parse(this.usermodel2));
    }, error => console.error(error));
  }
  ngOnInit() {
  }

  getUserModel() {
    this.usermodelservice.getUserModel(this.usermodelurl).subscribe(
      res => this.usermodel2 = res,
      error => console.error(error)
    );
  }
  getInfomation(http: HttpClient, url: string): Observable<UserModel> {
    return http.get<UserModel>(url);
  }
} 

export class UserModel {
  username: string;
  userpassword: string;

  constructor(name: string, password: string) {
    this.username = name;
    this.userpassword = password;
  }
}


export class UserModelService {
  constructor(private httpClient: HttpClient) { }

  getUserModel(baseUrl: string) {
    return this.httpClient.get<UserModel>(baseUrl)
      .pipe(
        map((data: any) => {
          const usermodel: UserModel = new UserModel(
            data.usermodel.username,
            data.usermodel.userpassword);
          return usermodel;
        })
      );
  }
}
