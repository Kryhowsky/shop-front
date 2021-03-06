import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { Select, Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { ProductDto } from 'src/api/models';
import { AddProductToBasketAction } from '../state/basket.actions';
import { ClearProductAction, GetProductByIdAction } from '../state/product.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  productId: number

  @Select(state => state.product.product)
  product$: Observable<ProductDto>

  formGroup: FormGroup = new FormGroup({})

  formConfig: FormlyFieldConfig[] = [
    {
      key: "quantity",
      type: "input",
      templateOptions: {
        type: "number",
        label: "Quantity",
        placeholder: "Enter the quantity",
        min: 1,
        required: true
      },
      expressionProperties: {
        "templateOptions.label": this.translateService.stream("product.quantityLabel"),
        "templateOptions.placeholder": this.translateService.stream("product.quantityPlaceholder"),
      }
    }
  ]

  constructor(private readonly store: Store, private readonly activatedRoute: ActivatedRoute, private readonly translateService: TranslateService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params["id"]

      if (this.productId) {
        this.store.dispatch(new GetProductByIdAction(this.productId))
      }

    })
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ClearProductAction());
  }

  submit(): void {
    this.store.dispatch(new AddProductToBasketAction({...this.formGroup.value, productId: this.productId}));
  }

}
