import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsComponent } from './products/products.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { CommonAppModule } from 'src/app/components/common-app/common-app.module';
import { AuthGuard } from '../../auth.guard';

const routes: Routes = [
  {
    path: "",
    component: AdminProductComponent,
    children: [
      {
        path: "form",
        component: ProductFormComponent
      },
      {
        path: "list",
        component: ProductsComponent
      },
      {
        path: "edit/:id",
        component: ProductFormComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminProductComponent,
    ProductFormComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    MatButtonModule,
    CommonAppModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminProductModule { }
