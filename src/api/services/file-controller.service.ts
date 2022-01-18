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


@Injectable({
  providedIn: 'root',
})
export class FileControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation testNonGenericFlyweight
   */
  static readonly TestNonGenericFlyweightPath = '/api/files';

  /**
   * Tests Flyweigth pattern in non generic version.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `testNonGenericFlyweight()` instead.
   *
   * This method doesn't expect any request body.
   */
  testNonGenericFlyweight$Response(params: {
    fileType: 'XLS' | 'PDF' | 'CSV' | 'JSON';
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FileControllerService.TestNonGenericFlyweightPath, 'get');
    if (params) {
      rb.query('fileType', params.fileType, {});
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
   * Tests Flyweigth pattern in non generic version.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `testNonGenericFlyweight$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  testNonGenericFlyweight(params: {
    fileType: 'XLS' | 'PDF' | 'CSV' | 'JSON';
  }): Observable<void> {

    return this.testNonGenericFlyweight$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation testGenericFlyweight
   */
  static readonly TestGenericFlyweightPath = '/api/files/generic';

  /**
   * Tests Flyweight pattern in generic version.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `testGenericFlyweight()` instead.
   *
   * This method doesn't expect any request body.
   */
  testGenericFlyweight$Response(params: {
    fileType: 'XLS' | 'PDF' | 'CSV' | 'JSON';
  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, FileControllerService.TestGenericFlyweightPath, 'get');
    if (params) {
      rb.query('fileType', params.fileType, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * Tests Flyweight pattern in generic version.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `testGenericFlyweight$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  testGenericFlyweight(params: {
    fileType: 'XLS' | 'PDF' | 'CSV' | 'JSON';
  }): Observable<Array<string>> {

    return this.testGenericFlyweight$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

}
