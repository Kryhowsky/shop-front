import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent implements OnInit {

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
        }
      },
      {
        key: "name",
        type: "input",
        templateOptions: {
          label: "Name",
          placeholder: "Enter name for the product",
          required: true
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
        }
      }
    ]
  }]

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {

  }

}
