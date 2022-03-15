/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { BasketDto } from '../models/basket-dto';
import { ProductDto } from '../models/product-dto';

@Injectable({
  providedIn: 'root',
})
export class BasketControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getBasketProducts
   */
  static readonly GetBasketProductsPath = '/api/basket';

  /**
   * Allows to get products for the user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBasketProducts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBasketProducts$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ProductDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BasketControllerService.GetBasketProductsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProductDto>>;
      })
    );
  }

  /**
   * Allows to get products for the user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBasketProducts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBasketProducts(params?: {
  }): Observable<Array<ProductDto>> {

    return this.getBasketProducts$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ProductDto>>) => r.body as Array<ProductDto>)
    );
  }

  /**
   * Path part for operation addProductToBasket
   */
  static readonly AddProductToBasketPath = '/api/basket';

  /**
   * Allows to add product to the basket.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addProductToBasket()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addProductToBasket$Response(params: {
    body: BasketDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BasketControllerService.AddProductToBasketPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Allows to add product to the basket.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addProductToBasket$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addProductToBasket(params: {
    body: BasketDto
  }): Observable<void> {

    return this.addProductToBasket$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
