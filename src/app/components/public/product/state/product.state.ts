import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { PageProductDto, ProductDto } from 'src/api/models';
import { ProductControllerService } from 'src/api/services';
import { ClearProductAction, CreateProductAction, DeleteProductByIdAction, EditProductAction, GetProductByIdAction, GetProductsPageAction } from './product.actions';

export class ProductStateModel {
  public productPage: PageProductDto;
  public pageSize: number;
  public product: ProductDto;
}

const defaults = {
  productPage: null,
  pageSize: 10,
  product: null
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
      tap(response => patchState({productPage: response, pageSize: size}))
    )
  }

  @Action(DeleteProductByIdAction)
  deleteProductById({ dispatch, getState }: StateContext<ProductStateModel>, { productId }: DeleteProductByIdAction) {
    return this.productService.deleteProductById({id: productId}).pipe(
      tap(response => {
        const size = getState().pageSize;
        dispatch(new GetProductsPageAction(0, size))
      })
    )
  }

  @Action(CreateProductAction)
  createProduct({ dispatch }: StateContext<ProductStateModel>, { product, image }: CreateProductAction) {
    return this.productService.saveProduct({body: {product, image}}).pipe(
      tap(response => dispatch(new Navigate(["/admin/product/list"])))
    )
  }

  @Action(EditProductAction)
  editProduct({ dispatch }: StateContext<ProductStateModel>, { productId, product, image }: EditProductAction) {
    return this.productService.updateProduct({id: productId, body: {product, image}}).pipe(
      tap(response => dispatch(new Navigate(["/admin/product/list"])))
    )
  }

  @Action(GetProductByIdAction)
  getProductById({ patchState }: StateContext<ProductStateModel>, { productId }: GetProductByIdAction) {
    return this.productService.getProductById({id: productId}).pipe(
      tap(response => patchState({product: response}))
    )
  }

  @Action(ClearProductAction)
  clearProduct({ patchState }: StateContext<ProductStateModel>) {
    patchState({product: null})
  }
}
