import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { TokenInterceptor } from './token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminModule,
    RouterModule.forChild([
      {
        path: "admin",
        loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
      }
    ])
  ],
  providers: [AuthGuard, {
    useClass: TokenInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS
  }]
})
export class PrivateModule { }
