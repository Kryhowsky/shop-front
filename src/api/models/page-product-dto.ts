/* tslint:disable */
/* eslint-disable */
import { PageableObject } from './pageable-object';
import { ProductDto } from './product-dto';
import { Sort } from './sort';
export interface PageProductDto {
  content?: Array<ProductDto>;
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
