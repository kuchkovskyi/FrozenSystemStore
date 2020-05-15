import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../core/category.service';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Category } from '../../Models/category.model';
import { ApiResult } from '../../../../Models/result.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private notifier: NotifierService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  model: Category;
  categoryId: number;
  isError: boolean;

  ngOnInit(): void {
    this.spinner.show();

    this.route.params.subscribe((params: Params) => {
      this.categoryId = params['id'];
    });
    this.categoryService.getCategory(this.categoryId).subscribe((categorry: Category) => {
      this.model = categorry;
      this.spinner.hide();
    });
  }

  submitForm() {
    if (this.model.name === null) {
      this.notifier.notify('error', 'Please, enter category`s name!');
      this.isError = true;
    }

    if (this.isError === false) {
      this.spinner.show();
      this.categoryService.editCategory(this.categoryId, this.model).subscribe(
        (data: ApiResult) => {
          if (data.status === 200) {
            this.notifier.notify('success', 'Category edited successfully!');
            this.router.navigate(['/admin-panel/categories-list-view']);
          }
        },
        (error) => {
          this.notifier.notify('error', 'ERROR!!!');
        }
      );
    }

    this.isError = false;
    this.spinner.hide();
  }
}
