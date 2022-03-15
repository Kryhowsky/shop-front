import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket/basket.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { MatTableModule } from '@angular/material/table';
import { NgxsModule } from '@ngxs/store';

const routes: Routes = [
  {
    path:"",
    component: BasketComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature()
  ]
})
export class BasketModule { }
