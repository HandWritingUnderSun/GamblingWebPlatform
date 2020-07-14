import { Component, Inject, OnInit,Input } from '@angular/core';
import { AuthModel } from '../auth/auth.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})

export class LogonComponent implements OnInit {
  authmodel: AuthModel = new AuthModel();
  public username='';
  public userpassword = '';

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(public http: HttpClient, public router: Router) {
  }

  ngOnInit(): void {
    this.getAuthModel();
  }

  onClick() {
    this.getAuthModel();
    this.router.navigateByUrl('/nav-menu');
  }

  getAuthModel() {
    console.log("1234");
    let api_url = 'http://localhost:61169/api/UserModelController/UserModel';
    this.http.get<AuthModel>(api_url).subscribe(res => { console.log(res as AuthModel); this.authmodel = res; }
    );
    //this.service.getAuthModel().subscribe(hero => this.authmodel = hero);
    //console.log(this.authmodel.username);
  }

} 
