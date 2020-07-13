import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthModel } from './auth.model';
import { Observable, of } from 'rxjs';
import { error } from '@angular/compiler/src/util';
import { log } from 'util';
import { catchError, map, tap } from 'rxjs/operators';
import { logging } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api_url= 'http://localhost:61169/api/UserModelController/UserModel';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private http: HttpClient;
  authmodel: AuthModel;
  constructor() { }

  loginWithCredentials(authmodel: AuthModel): boolean{
    alert(authmodel.username);
    if (authmodel.username == '123')
      return true;
    return false;
  }

  //getAuthModel(): Promise<AuthModel> {
  //  console.log("22222");
  //  return this.http.get<AuthModel>(this.api_url).then(res => this.authmodel = res);
  //}

  CheckAuthModel(name: string, password: string): boolean {
    let checkapi_url = 'http://localhost:61169/api/UserModelController/CheckUser';
    let authmodel = {
      username: name,
      password: password
    };
    return false;
    //return this.http
    //  .post(checkapi_url, JSON.stringify(authmodel), { headers: this.headers })
    //  .toPromise()
    //  .catch(this.handleError);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
