import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/api.service';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { CategoryModel } from '../../../../Models/category.model';
import { CategoryService } from '../../../../core/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  model = new CategoryModel();
  isError = false;

  constructor(
    private categoryService: CategoryService,
    private notifier: NotifierService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isError = false;
  }

  OnSubmit() {
    this.spinner.show();

    if (this.model.Name === null) {
      this.notifier.notify('error', 'Please, enter name of category');
      this.isError = true;
    }

    if (this.isError === false) {
      this.categoryService.addCategory(this.model).subscribe(
        data => {
          console.log(data);
          if (data.status === 200) {
            this.spinner.hide();
            this.notifier.notify('success', 'Category is added!');
            this.router.navigate(['admin-panel/categories-list-view']);
          } else {
            console.log(data.errors);
            for (let i = 0; i < data.errors.length; i++) {
              this.notifier.notify('error', data.errors[i]);
            }
            setTimeout(() => {
              this.spinner.hide();
            }, 2500);
          }
        },
        errors => {
          console.log(errors);
        });
    } else {
      setTimeout(() => {
        this.spinner.hide();
        this.isError = false;
      }, 2500);
    }
  }

}
