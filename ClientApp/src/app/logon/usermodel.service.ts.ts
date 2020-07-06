import { UserModel } from './usermodel.model';




export class UserModelService {
  //定义你的假WebAPI地址，这个定义成什么都无所谓
  //只要确保是无法访问的地址就好
  private api_url = 'api/UserModelController/UserModel';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getUserModel(baseUrl: string) {
    return this.http.get<UserModel>(baseUrl)
      .pipe(
        map((data: any) => {
          const usermodel: UserModel = new UserModel(
            data.object.usermodel.username,
            data.object.usermodel.userpassword);
          return usermodel;
        })
      );
  }

  getUserModel2(): Promise<UserModel> {
    return this.http.get(this.api_url)
      .toPromise()
      .then(res => res as UserModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
