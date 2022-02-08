import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PageProductDto } from 'src/api/models';
import { GetProductsPageAction } from '../../public/product/state/product.actions';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.sass']
})
export class ProductsTableComponent implements OnInit {

  dataSource = []
  displayedColumns = []

  @Select(state => state.product.productPage)
  productPage$: Observable<PageProductDto>

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetProductsPageAction(0, 10))
  }

}
