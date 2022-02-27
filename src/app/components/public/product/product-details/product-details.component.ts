import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProductDto } from 'src/api/models';
import { GetProductByIdAction } from '../state/product.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {

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
      }
    }
  ]

  constructor(private readonly store: Store, private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params["id"]

      if (this.productId) {
        this.store.dispatch(new GetProductByIdAction(this.productId))
      }

    })
  }

  submit(): void {
    
  }

}
