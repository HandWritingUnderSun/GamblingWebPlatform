import { Component, OnInit } from '@angular/core';
import { UserModel } from './usermodel.model';
import { UserModelService } from './usermodel.service';

@Component({
  selector: 'app-logon-data',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css'],
  providers: [UserModelService]
})

export class LogonComponent implements OnInit {
  usermodel: UserModel;

  constructor(private usermodelservice: UserModelService) {  }
  ngOnInit() {
    this.getUserModel();
  }

  getUserModel(): void {
    alert("123");
    //this.usermodelservice
    //  .getUserModel()
    //  .then(usermodel => this.usermodel = usermodel);
  }
} 
