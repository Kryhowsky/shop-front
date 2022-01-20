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
    },
    {
      key: "lastName",
      type: "input",
      templateOptions: {
        label: "Last Name",
        placeholder: "Enter last name",
        required: true
      }
    },
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
    },
    {
      key: "confirmPassword",
      type: "input",
      templateOptions: {
        label: "Confirm Password",
        placeholder: "Repeat password",
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
