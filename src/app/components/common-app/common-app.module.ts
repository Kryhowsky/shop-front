import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsTableComponent } from './products-table/products-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [ProductsTableComponent],
  imports: [
    TranslateModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [ProductsTableComponent]
})
export class CommonAppModule { }
