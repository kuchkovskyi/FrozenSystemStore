import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotifierService } from 'angular-notifier';
import { UserManagerService } from './../../../Services/user-manager.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserItem } from '../../../Models/user-item.model';
import { ApiResult } from '../../../../../Models/result.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(
    private userService: UserManagerService,
    private notifier: NotifierService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  model: UserItem;
  userId: string;
  isError: boolean;

  ngOnInit() {
    this.spinner.show();

    this.route.params.subscribe((params: Params) => {
      this.userId = params['id'];
    });
    this.userService.getUser(this.userId).subscribe((user: UserItem) => {
      this.model = user;
      this.spinner.hide();
    });
  }

  submitForm() {
    if (this.model.email === null) {
      this.notifier.notify('info', 'Please, enter user`s email!');
      this.isError = true;
    }
    if (this.model.fullName === null) {
      this.notifier.notify('info', 'Please, enter user`s full name!');
      this.isError = true;
    }
    if (this.model.phone === null) {
      this.notifier.notify('info', 'Please, enter user`s phone number!');
      this.isError = true;
    }
    if (!this.validateEmail) {
      this.notifier.notify('info', 'Email is not correct!');
      this.isError = true;
    }

    if (this.isError === false) {
      this.spinner.show();
      this.userService.editUser(this.userId, this.model).subscribe(
        (data: ApiResult) => {
          if (data.status === 200) {
            this.notifier.notify('success', 'User edited successfully!');
            this.router.navigate(['/admin-panel/user-manager']);
          }
        },
        (error) => {
          this.notifier.notify('info', 'ERROR!!!');
        }
      );
    }

    this.isError = false;
    this.spinner.hide();
  }

  validateEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}
