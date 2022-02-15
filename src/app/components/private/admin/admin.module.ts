import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AdminProductModule } from './admin-product/admin-product.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ["ROLE_ADMIN"]
    },
    children: [
      {
        path: "product",
        loadChildren: () => import("./admin-product/admin-product.module").then(m => m.AdminProductModule)
      }
    ]
  }
]


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminProductModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
