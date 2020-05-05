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
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { AddProductComponent } from './Areas/admin-area/Components/add-product/add-product.component';
import { EditProductComponent } from './Areas/admin-area/Components/edit-product/edit-product.component';
import { ViewProductComponent } from './products/view-product/view-product.component';

import { CategoriesComponent } from './categories/categories.component';
import { CategotyListComponent } from './categories/categoty-list/categoty-list.component';
import { CategoryItemComponent } from './categories/categoty-list/category-item/category-item.component';
import { AddCategoryComponent } from './Areas/admin-area/Components/add-category/add-category.component';
import { EditCategoryComponent } from './Areas/admin-area/Components/edit-category/edit-category.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { QuestionsComponent } from './Areas/user-area/Components/questions/questions.component';
import { PaymentWindowComponent } from './Areas/user-area/Components/payment-window/payment-window.component';

import { ShoppingCartComponent } from './Areas/user-area/Components/shopping-cart/shopping-cart.component';
import { ShoppingCartListComponent } from './Areas/user-area/Components/shopping-cart/shopping-cart-list/shopping-cart-list.component';
import { ShoppingCartItemComponent } from './Areas/user-area/Components/shopping-cart/shopping-cart-list/shopping-cart-item/shopping-cart-item.component';

import { FavoritesComponent } from './Areas/user-area/Components/favorites/favorites.component';
import { FavoriteListComponent } from './Areas/user-area/Components/favorites/favorite-list/favorite-list.component';
import { FavoriteItemComponent } from './Areas/user-area/Components/favorites/favorite-list/favorite-item/favorite-item.component';

import { AdminAreaComponent } from './Areas/admin-area/admin-area.component';
import { UserAreaComponent } from './Areas/user-area/user-area.component';

import { DashboardComponent } from './Areas/admin-area/Components/dashboard/dashboard.component';
import { UserManagerComponent } from './Areas/admin-area/Components/user-manager/user-manager.component';

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
      CategoriesComponent,
      AddProductComponent,
      EditProductComponent,
      ViewProductComponent,
      AddCategoryComponent,
      EditCategoryComponent,
      QuestionsComponent,
      ProductListComponent,
      ProductItemComponent,
      CategotyListComponent,
      CategoryItemComponent,
      RegisterComponent,
      LoginComponent,
      FavoritesComponent,
      ShoppingCartComponent,
      FavoriteListComponent,
      FavoriteItemComponent,
      ShoppingCartListComponent,
      ShoppingCartItemComponent,
      PaymentWindowComponent,
      AdminAreaComponent,
      UserAreaComponent,
      DashboardComponent,
      UserManagerComponent,
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
