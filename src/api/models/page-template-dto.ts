/* tslint:disable */
/* eslint-disable */
import { PageableObject } from './pageable-object';
import { Sort } from './sort';
import { TemplateDto } from './template-dto';
export interface PageTemplateDto {
  content?: Array<TemplateDto>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: PageableObject;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
}
