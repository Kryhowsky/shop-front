import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { PageProductDto } from 'src/api/models';
import { ProductControllerService } from 'src/api/services';
import { GetProductsPageAction } from './product.actions';

export class ProductStateModel {
  public productPage: PageProductDto;
}

const defaults = {
  productPage: null
};

@State<ProductStateModel>({
  name: 'product',
  defaults
})
@Injectable()
export class ProductState {
  constructor(private readonly productService: ProductControllerService) {}

  @Action(GetProductsPageAction)
  getProductsPage({ patchState }: StateContext<ProductStateModel>, { page, size }: GetProductsPageAction) {
    return this.productService.getProductPage({page, size}).pipe(
      tap(response => patchState({productPage: response}))
    )
  }
}
