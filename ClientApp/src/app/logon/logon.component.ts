import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from './usermodel.model';

@Component({
  selector: 'app-logon-data',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {
  usermodel: UserModel;
  usermodel2: UserModel;
  usermodelurl: string;
  private config = { responseType: 'UserModel' };

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, usermodelservice: UserModelService;) {
    this.usermodelurl = baseUrl + 'api/UserModelController/UserModel';
    this.getUserModel();
    http.get<UserModel>(baseUrl + 'api/UserModelController/UserModel').subscribe(result => {
      result = result.json().data;
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
