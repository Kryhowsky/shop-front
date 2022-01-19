import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({})
  formConfig: FormlyFieldConfig[] = [
    {
      key: "firstName",
      type: "input",
      templateOptions: {
        label: "First Name",
        placeholder: "Enter first name",
        required: true
      }
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    
  }

}
