import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProductDto } from 'src/api/models';
import { GetBasketProductsListAction } from 'src/app/components/public/product/state/basket.actions';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.sass']
})
export class BasketComponent implements OnInit {

  @Select(state => state.basket.basketProducts)
  basketProductsList$: Observable<ProductDto[]>

  displayedColumns = ["productName", "productPrice", "productQuantity"]

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetBasketProductsListAction())
  }

  getTotalPrice(products: ProductDto[]) {
    if (products.length != 0) {
      return products.map(product => product.price * product.quantity)
        .reduce((prev, next) => prev + next)
    }
    return 0
  }

  getTotalQuantity(products: ProductDto[]) {
    if (products.length != 0) {
      return products.map(product => product.quantity)
        .reduce((prev, next) => prev + next)
    }
    return 0
  }

}
