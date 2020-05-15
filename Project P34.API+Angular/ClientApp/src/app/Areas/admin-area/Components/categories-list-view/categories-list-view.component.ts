import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotifierService } from 'angular-notifier';
import { ApiResult } from '../../../../Models/result.model';
import { Category } from '../../Models/category.model';
import { CategoryService } from '../../../../core/category.service';

@Component({
  selector: 'app-categories-list-view',
  templateUrl: './categories-list-view.component.html',
  styleUrls: ['./categories-list-view.component.css']
})
export class CategoriesListViewComponent implements OnInit {

  listOfData: Category[] = [];

  serchCategory: string;
  searchResult: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService
  ) { }

  ngOnInit(): void {
    this.spinner.show();

    this.categoryService.getAllCategories().subscribe((AllCategories: Category[]) => {
        this.listOfData = AllCategories;
        console.log(this.listOfData);
        this.searchResult = AllCategories;
        this.spinner.hide();
      }
    );
  }

  deleteCategory(id: number) {
    this.spinner.show();

    this.categoryService.removeCategory(id).subscribe(
      (data: ApiResult) => {
        if (data.status === 200) {
          this.notifier.notify('success', 'Conglaturations! Category removed :)');
          this.listOfData = this.listOfData.filter(t => t.id !== id);
          this.searchResult = this.searchResult.filter(t => t.id !== id);
          this.spinner.hide();
        } else {
          for (let i = 0; i < data.errors; i++) {
            this.notifier.notify('error', data.errors[i]);
            this.spinner.hide();
          }
        }
      }
    );
  }

  SearchCategory() {
    this.searchResult = this.listOfData.filter(
      t => t.name.includes(this.serchCategory)
      );
  }

}
