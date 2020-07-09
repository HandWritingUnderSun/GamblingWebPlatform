import { UserModel } from './usermodel.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserModelService {
  //定义你的假WebAPI地址，这个定义成什么都无所谓
  //只要确保是无法访问的地址就好
  //private api_url = 'api/UserModelController/UserModel';
  private api_url= 'http://localhost:61169/api/UserModelController/UserModel';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    console.log('1234');
  }

  getUserModel(): Promise<UserModel> {
    return this.http.get(this.api_url)
      .toPromise()
      .then(res => res as UserModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    alert('Error');
    const msg = error.message || error;
    alert(msg);
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
