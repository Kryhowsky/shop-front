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

import { PageTemplateDto } from '../models/page-template-dto';
import { TemplateDto } from '../models/template-dto';

@Injectable({
  providedIn: 'root',
})
export class TemplateControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getTemplatePage
   */
  static readonly GetTemplatePagePath = '/api/templates';

  /**
   * Allows to read page of Templates with specific size.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTemplatePage()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTemplatePage$Response(params: {
    page: number;
    size: number;
  }): Observable<StrictHttpResponse<PageTemplateDto>> {

    const rb = new RequestBuilder(this.rootUrl, TemplateControllerService.GetTemplatePagePath, 'get');
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
        return r as StrictHttpResponse<PageTemplateDto>;
      })
    );
  }

  /**
   * Allows to read page of Templates with specific size.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTemplatePage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTemplatePage(params: {
    page: number;
    size: number;
  }): Observable<PageTemplateDto> {

    return this.getTemplatePage$Response(params).pipe(
      map((r: StrictHttpResponse<PageTemplateDto>) => r.body as PageTemplateDto)
    );
  }

  /**
   * Path part for operation saveTemplate
   */
  static readonly SaveTemplatePath = '/api/templates';

  /**
   * Allows to add new Template.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveTemplate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveTemplate$Response(params: {
    body: TemplateDto
  }): Observable<StrictHttpResponse<TemplateDto>> {

    const rb = new RequestBuilder(this.rootUrl, TemplateControllerService.SaveTemplatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TemplateDto>;
      })
    );
  }

  /**
   * Allows to add new Template.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `saveTemplate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveTemplate(params: {
    body: TemplateDto
  }): Observable<TemplateDto> {

    return this.saveTemplate$Response(params).pipe(
      map((r: StrictHttpResponse<TemplateDto>) => r.body as TemplateDto)
    );
  }

  /**
   * Path part for operation getTemplateByName
   */
  static readonly GetTemplateByNamePath = '/api/templates/{name}';

  /**
   * Allows to read Template by ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTemplateByName()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTemplateByName$Response(params: {
    name: string;
  }): Observable<StrictHttpResponse<TemplateDto>> {

    const rb = new RequestBuilder(this.rootUrl, TemplateControllerService.GetTemplateByNamePath, 'get');
    if (params) {
      rb.path('name', params.name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TemplateDto>;
      })
    );
  }

  /**
   * Allows to read Template by ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTemplateByName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTemplateByName(params: {
    name: string;
  }): Observable<TemplateDto> {

    return this.getTemplateByName$Response(params).pipe(
      map((r: StrictHttpResponse<TemplateDto>) => r.body as TemplateDto)
    );
  }

  /**
   * Path part for operation deleteTemplateById
   */
  static readonly DeleteTemplateByIdPath = '/api/templates/{id}';

  /**
   * Allows to delete Template with specific ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTemplateById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTemplateById$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TemplateControllerService.DeleteTemplateByIdPath, 'delete');
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
   * Allows to delete Template with specific ID.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteTemplateById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTemplateById(params: {
    id: number;
  }): Observable<void> {

    return this.deleteTemplateById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
