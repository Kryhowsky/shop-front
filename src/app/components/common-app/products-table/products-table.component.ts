import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PageProductDto, ProductDto } from 'src/api/models';
import { DeleteProductByIdAction, GetProductsPageAction } from '../../public/product/state/product.actions';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.sass']
})
export class ProductsTableComponent implements OnInit {

  dataSource = []

  @Input()
  displayedColumns = []

  @Select(state => state.product.productPage)
  productPage$: Observable<PageProductDto>

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetProductsPageAction(0, 10))
  }

  changePage(event: PageEvent): void {
    this.store.dispatch(new GetProductsPageAction(event.pageIndex, event.pageSize))
  }

  deleteProductById(productId: number): void {
    this.store.dispatch(new DeleteProductByIdAction(productId))
  }

}
