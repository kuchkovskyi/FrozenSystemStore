import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  isAdmin: boolean;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
    this.isLoggedIn = this.apiService.isLoggedIn();
    this.isAdmin = this.apiService.isAdmin();

    this.apiService.loginStatus.subscribe((status) => {
      this.isLoggedIn = status;
      this.isAdmin = this.apiService.isAdmin();
    });
  }

  ngOnInit() {

  }

  LogOut() {
    this.apiService.isLogOut();
    this.router.navigate(['/login']);
  }

}
