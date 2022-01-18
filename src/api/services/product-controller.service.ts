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

import { PageProductDto } from '../models/page-product-dto';
import { ProductDto } from '../models/product-dto';

@Injectable({
  providedIn: 'root',
})
export class ProductControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getProductById
   */
  static readonly GetProductByIdPath = '/api/products/{id}';

  /**
   * Returns Product with specific ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ProductDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductControllerService.GetProductByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductDto>;
      })
    );
  }

  /**
   * Returns Product with specific ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getProductById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductById(params: {
    id: number;
  }): Observable<ProductDto> {

    return this.getProductById$Response(params).pipe(
      map((r: StrictHttpResponse<ProductDto>) => r.body as ProductDto)
    );
  }

  /**
   * Path part for operation updateProduct
   */
  static readonly UpdateProductPath = '/api/products/{id}';

  /**
   * Allows to update the Product with specific ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProduct()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProduct$Response(params: {
    id: number;
    body?: {
'product': ProductDto;
'image'?: Blob;
}
  }): Observable<StrictHttpResponse<ProductDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductControllerService.UpdateProductPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductDto>;
      })
    );
  }

  /**
   * Allows to update the Product with specific ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateProduct$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProduct(params: {
    id: number;
    body?: {
'product': ProductDto;
'image'?: Blob;
}
  }): Observable<ProductDto> {

    return this.updateProduct$Response(params).pipe(
      map((r: StrictHttpResponse<ProductDto>) => r.body as ProductDto)
    );
  }

  /**
   * Path part for operation deleteProductById
   */
  static readonly DeleteProductByIdPath = '/api/products/{id}';

  /**
   * Allows to delete Product with specific ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProductById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProductById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductControllerService.DeleteProductByIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * Allows to delete Product with specific ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteProductById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProductById(params: {
    id: number;
  }): Observable<void> {

    return this.deleteProductById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getProductPage
   */
  static readonly GetProductPagePath = '/api/products';

  /**
   * Returns page of Products with specific size.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductPage$Response(params: {
    page: number;
    size: number;
  }): Observable<StrictHttpResponse<PageProductDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductControllerService.GetProductPagePath, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('size', params.size, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PageProductDto>;
      })
    );
  }

  /**
   * Returns page of Products with specific size.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getProductPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductPage(params: {
    page: number;
    size: number;
  }): Observable<PageProductDto> {

    return this.getProductPage$Response(params).pipe(
      map((r: StrictHttpResponse<PageProductDto>) => r.body as PageProductDto)
    );
  }

  /**
   * Path part for operation saveProduct
   */
  static readonly SaveProductPath = '/api/products';

  /**
   * Allows to add new Product.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveProduct()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveProduct$Response(params?: {
    body?: {
'product': ProductDto;
'image': Blob;
}
  }): Observable<StrictHttpResponse<ProductDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductControllerService.SaveProductPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductDto>;
      })
    );
  }

  /**
   * Allows to add new Product.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `saveProduct$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveProduct(params?: {
    body?: {
'product': ProductDto;
'image': Blob;
}
  }): Observable<ProductDto> {

    return this.saveProduct$Response(params).pipe(
      map((r: StrictHttpResponse<ProductDto>) => r.body as ProductDto)
    );
  }

}
