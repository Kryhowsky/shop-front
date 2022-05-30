import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProductDto } from 'src/api/models';
import { ClearProductAction, CreateProductAction, EditProductAction, GetProductByIdAction } from 'src/app/components/public/product/state/product.actions';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent implements OnInit, OnDestroy {

  productId: number
  image: Blob

  formGroup: FormGroup = new FormGroup( {} )

  formConfig: FormlyFieldConfig[] = [{
    fieldGroup: [
      {
        key: "brand",
        type: "input",
        templateOptions: {
          label: "Brand",
          placeholder: "Enter brand for the product",
          required: true
        },
        expressionProperties: {
          "templateOptions.label": this.translateService.stream("product.brandLabel"),
          "templateOptions.placeholder": this.translateService.stream("product.brandPlaceholder"),
        }
      },
      {
        key: "name",
        type: "input",
        templateOptions: {
          label: "Name",
          placeholder: "Enter name for the product",
          required: true
        },
        expressionProperties: {
          "templateOptions.label": this.translateService.stream("product.nameLabel"),
          "templateOptions.placeholder": this.translateService.stream("product.namePlaceholder"),
        }
      },
      {
        key: "description",
        type: "input",
        templateOptions: {
          label: "Description",
          placeholder: "Enter description for the product",
          type: "textarea",
          required: true
        },
        expressionProperties: {
          "templateOptions.label": this.translateService.stream("product.descriptionLabel"),
          "templateOptions.placeholder": this.translateService.stream("product.descriptionPlaceholder"),
        }
      },
      {
        key: "price",
        type: "input",
        templateOptions: {
          label: "Price",
          placeholder: "0.0",
          type: "number",
          min: 0,
          required: true
        },
        expressionProperties: {
          "templateOptions.label": this.translateService.stream("product.priceLabel")
        }
      },
      {
        key: "quantity",
        type: "input",
        templateOptions: {
          label: "Quantity",
          placeholder: "0",
          type: "number",
          min: 0,
          required: true
        },
        expressionProperties: {
          "templateOptions.label": this.translateService.stream("product.quantityLabel")
        }
      }
    ]
  }]

  @Select(state => state.product.product)
  product$: Observable<ProductDto>

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
    if (this.productId) {
      this.store.dispatch(new EditProductAction(this.productId, this.formGroup.value, this.image))
    } else {
    this.store.dispatch(new CreateProductAction(this.formGroup.value, this.image))
    }
  }

  upload(targetEvent) {
    const files: FileList = targetEvent.files
    this.image = files[0]
  }

}
