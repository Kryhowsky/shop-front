import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module';
import { ForbiddenComponent } from './forbidden/forbidden.component';



@NgModule({
  declarations: [
    ForbiddenComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    ProductModule,
    RouterModule.forChild([
      {
        path: "auth",
        loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
      },
      {
        path: "forbidden",
        component: ForbiddenComponent
      }
    ])
  ]
})
export class PublicModule { }
