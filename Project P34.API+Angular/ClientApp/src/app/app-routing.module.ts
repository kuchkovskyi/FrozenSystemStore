import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

import { UserManagerComponent } from './Areas/admin-area/Components/user-manager/user-manager.component';
import { UserAreaComponent } from './Areas/user-area/user-area.component';

import { AdminGuard } from './Guards/admin.guard';
import { NotLoginGuard } from './Guards/notLogin.guard';
import { AuthGuard } from './Guards/auth.guard';

import { QuestionsComponent } from './Areas/user-area/Components/questions/questions.component';
import { PaymentWindowComponent } from './Areas/user-area/Components/payment-window/payment-window.component';
import { FavoritesComponent } from './Areas/user-area/Components/favorites/favorites.component';
import { ShoppingCartComponent } from './Areas/user-area/Components/shopping-cart/shopping-cart.component';

import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './Areas/admin-area/Components/add-product/add-product.component';
import { EditProductComponent } from './Areas/admin-area/Components/edit-product/edit-product.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { ProductsListViewComponent } from './Areas/admin-area/Components/products-list-view/products-list-view.component';

import { AddCategoryComponent } from './Areas/admin-area/Components/add-category/add-category.component';
import { EditCategoryComponent } from './Areas/admin-area/Components/edit-category/edit-category.component';
import { CategoriesListViewComponent } from './Areas/admin-area/Components/categories-list-view/categories-list-view.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AdminAreaComponent } from './Areas/admin-area/admin-area.component';
import { DashboardComponent } from './Areas/admin-area/Components/dashboard/dashboard.component';
import { UserEditComponent } from './Areas/admin-area/Components/user-manager/user-edit/user-edit.component';

const routes: Routes = [
  {
    path: 'main-page',
    component: ProductsComponent,
    pathMatch: 'full'
  },
  // {
  // path: ':id',
  // component: ViewProductComponent,
  // pathMatch: 'full'
  // },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NotLoginGuard],
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotLoginGuard],
    pathMatch: 'full'
  },

  // Admin Area
  {
    path: 'admin-panel',
    component: AdminAreaComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
      },
      {
        path: 'user-manager',
        component: UserManagerComponent,
        pathMatch: 'full'
      },
      {
        path: 'edit-user/:id',
        component: UserEditComponent,
        pathMatch: 'full'
      },
      {
        path: 'add-product',
        component: AddProductComponent,
        pathMatch: 'full'
      },
      {
        path: 'edit-product/:id',
        component: EditProductComponent,
        pathMatch: 'full'
      },
      {
        path: 'products-list-view',
        component: ProductsListViewComponent,
        pathMatch: 'full'
      },

      {
        path: 'add-category',
        component: AddCategoryComponent,
        pathMatch: 'full'
      },
      {
        path: 'edit-category/:id',
        component: EditCategoryComponent,
        pathMatch: 'full'
      },
      {
        path: 'categories-list-view',
        component: CategoriesListViewComponent,
        pathMatch: 'full'
      }
    ]
  },

  // User Area
  {
    path: '',
    component: UserAreaComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'favorites',
        component: FavoritesComponent,
        pathMatch: 'full'
      },
      {
        path: 'cart',
        component: ShoppingCartComponent,
        pathMatch: 'full'
      },
      {
        path: 'payment',
        component: PaymentWindowComponent,
        pathMatch: 'full'
      },
      {
        path: 'help',
        component: QuestionsComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
