import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { RouterModule } from '@angular/router';



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
  ]
})
export class PrivateModule { }
