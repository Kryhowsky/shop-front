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
export class EmailControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation sendEmail
   */
  static readonly SendEmailPath = '/api/emails';

  /**
   * Tests generating email.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendEmail$Response(params: {
    emailType: 'REGISTRATION' | 'WELCOME';
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmailControllerService.SendEmailPath, 'get');
    if (params) {
      rb.query('emailType', params.emailType, {});
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
   * Tests generating email.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `sendEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendEmail(params: {
    emailType: 'REGISTRATION' | 'WELCOME';
  }): Observable<void> {

    return this.sendEmail$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
