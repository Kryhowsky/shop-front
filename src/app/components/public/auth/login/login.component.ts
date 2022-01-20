import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({})

  formConfig: FormlyFieldConfig[] = [
    {
      key: "email",
      type: "input",
      templateOptions: {
        label: "Email",
        placeholder: "Enter email address",
        type: "email",
        required: true
      }
    },
    {
      key: "password",
      type: "input",
      templateOptions: {
        label: "Password",
        placeholder: "Enter password",
        type: "password",
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
