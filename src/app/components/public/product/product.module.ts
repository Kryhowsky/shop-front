import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import { CommonAppModule } from '../../common-app/common-app.module';
import { NgxsModule } from '@ngxs/store';
import { ProductState } from './state/product.state';
import { BasketState } from './state/basket.state';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: "",
    component: ProductComponent,
    children: [
      {
        path: "details/:id",
        component: ProductDetailsComponent
      },
      {
        path: "list",
        component: ProductsListComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    ProductsListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    MatButtonModule,
    CommonAppModule,
    MatCardModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([ProductState, BasketState])
  ]
})
export class ProductModule { }
