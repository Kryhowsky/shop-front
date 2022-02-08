import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Store } from '@ngxs/store';
import { RegisterUserAction } from '../state/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup = new FormGroup( {} )

  formConfig: FormlyFieldConfig[] = [{
    validators: {
      validation: [
        { name: 'fieldMatch', options: { errorPath: 'confirmPassword' } },
        { name: 'emailValid', options: { errorPath: 'email' } }
      ]
    },
    fieldGroup: [
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
          required: true,
          minLength: 5
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
  }]

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.store.dispatch(new RegisterUserAction(this.formGroup.value))
  }

}
