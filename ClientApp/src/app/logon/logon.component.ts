import { Component, Inject, OnInit,Input } from '@angular/core';
import { AuthModel } from '../auth/auth.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { relative } from 'path';

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

  constructor(public http: HttpClient, public router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAuthModel();
  }

  onClick() {
    console.log(this.router.url);
    this.router.navigate(['counter']);
    console.log(this.router.url);
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
