import { Component, OnInit } from '@angular/core';
import { SignInModel } from '../Models/login.model';
import { ApiService } from '../core/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new SignInModel();
  isError: boolean;

  constructor(
    private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isError = false;
  }

  validateEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  onSubmit() {
    this.spinner.show();

    if (this.model.Email === null) {
      this.notifier.notify('info', 'Please, enter email!');
      this.isError = true;
    } else if (!this.validateEmail(this.model.Email)) {
      this.notifier.notify('info', 'Email is not correct!');
      this.isError = true;
    }
    if (this.model.Password === null) {
      this.notifier.notify('info', 'Please, enter password!');
      this.isError = true;
    }

    if (this.isError === false) {
      this.apiService.SignIn(this.model).subscribe(
        data => {
          if (data.status === 200) {
            this.spinner.hide();
            console.log(data);
            window.localStorage.setItem('token', data.token);
            this.apiService.loginStatus.emit(true);

            const jwtData = data.token.split('.')[1];
            const decodedJwtJsonData = window.atob(jwtData);
            const decodedJwtData = JSON.parse(decodedJwtJsonData);

            if (decodedJwtData.roles === 'User') {
              this.router.navigate(['/mane-page']);
            } else if (decodedJwtData.roles === 'Admin') {
              this.router.navigate(['/admin-panel']);
            }

            this.router.navigate(['/main-page']);
            } else {
            for (let i = 0; i < data.errors.length; i++) {
              this.notifier.notify('info', data.errors[i]);
            }
            this.spinner.hide();
          }
        }
      );

    } else {
      this.isError = false;
      this.spinner.hide();
    }
  }

}
