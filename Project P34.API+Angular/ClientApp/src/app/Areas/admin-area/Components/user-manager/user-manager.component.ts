import { Component, OnInit } from '@angular/core';
import { UserItem } from '../../Models/user-item.model';
import { UserManagerService } from '../../Services/user-manager.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotifierService } from 'angular-notifier';
import { ApiResult } from './../../../../Models/result.model';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {

  listOfData: UserItem[] = [];

  constructor(
    private userService: UserManagerService,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService
  ) {}

  deleteUser(id: string) {
    this.spinner.show();

    this.userService.removeUser(id).subscribe(
      (data: ApiResult) => {
        if (data.status === 200) {
          this.notifier.notify('success', 'Conglaturations! User removed :)');
          localStorage.removeItem('token');
          this.spinner.hide();
        } else {
          for ( let i = 0; i < data.errors; i++) {
            this.notifier.notify('info', data.errors[i]);
            this.spinner.hide();
          }
        }
      }
    );
  }

  ngOnInit(): void {
    this.spinner.show();

    this.userService.getAllUsers().subscribe((AllUsers: UserItem[]) => {
        this.listOfData = AllUsers;
        this.spinner.hide();
      }
    );
  }

}
