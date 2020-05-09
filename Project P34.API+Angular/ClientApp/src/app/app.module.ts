import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './Areas/admin-area/Components/add-product/add-product.component';
import { EditProductComponent } from './Areas/admin-area/Components/edit-product/edit-product.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { ProductsListViewComponent } from './Areas/admin-area/Components/products-list-view/products-list-view.component';

import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './Areas/admin-area/Components/add-category/add-category.component';
import { EditCategoryComponent } from './Areas/admin-area/Components/edit-category/edit-category.component';
import { CategoriesListViewComponent } from './Areas/admin-area/Components/categories-list-view/categories-list-view.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { QuestionsComponent } from './Areas/user-area/Components/questions/questions.component';
import { PaymentWindowComponent } from './Areas/user-area/Components/payment-window/payment-window.component';

import { ShoppingCartComponent } from './Areas/user-area/Components/shopping-cart/shopping-cart.component';
import { FavoritesComponent } from './Areas/user-area/Components/favorites/favorites.component';

import { AdminAreaComponent } from './Areas/admin-area/admin-area.component';
import { UserAreaComponent } from './Areas/user-area/user-area.component';

import { DashboardComponent } from './Areas/admin-area/Components/dashboard/dashboard.component';
import { UserManagerComponent } from './Areas/admin-area/Components/user-manager/user-manager.component';
import { UserEditComponent } from './Areas/admin-area/Components/user-manager/user-edit/user-edit.component';

const notifierOptions: NotifierOptions  = {
 position : { horizontal : {position: 'right'}, vertical: {position: 'top'}}
};

@NgModule({
   declarations: [
      AppComponent,

      HeaderComponent,
      FooterComponent,
      ErrorPageComponent,

      ProductsComponent,
      AddProductComponent,
      EditProductComponent,
      ViewProductComponent,
      ProductsListViewComponent,

      CategoriesComponent,
      AddCategoryComponent,
      EditCategoryComponent,
      CategoriesListViewComponent,

      QuestionsComponent,
      PaymentWindowComponent,

      RegisterComponent,
      LoginComponent,

      FavoritesComponent,
      ShoppingCartComponent,

      AdminAreaComponent,
      UserAreaComponent,

      DashboardComponent,
      UserManagerComponent,
      UserEditComponent,
   ],
   imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NotifierModule.withConfig(notifierOptions),
    BrowserAnimationsModule,
    NgxSpinnerModule
 ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
