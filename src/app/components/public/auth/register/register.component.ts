import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
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
        },
        expressionProperties: {
          "templateOptions.label": this.translateService.stream("user.firstNameLabel"),
          "templateOptions.placeholder": this.translateService.stream("user.firstNamePlaceholder"),
        }
      },
      {
        key: "lastName",
        type: "input",
        templateOptions: {
          label: "Last Name",
          placeholder: "Enter last name",
          required: true
        },
        expressionProperties: {
          "templateOptions.label": this.translateService.stream("user.lastNameLabel"),
          "templateOptions.placeholder": this.translateService.stream("user.lastNamePlaceholder"),
        }
      },
      {
        key: "email",
        type: "input",
        templateOptions: {
          label: "Email",
          placeholder: "Enter email address",
          required: true
        },
        expressionProperties: {
          "templateOptions.label": this.translateService.stream("user.emailLabel"),
          "templateOptions.placeholder": this.translateService.stream("user.emailPlaceholder"),
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
        },
        expressionProperties: {
          "templateOptions.label": this.translateService.stream("user.passwordLabel"),
          "templateOptions.placeholder": this.translateService.stream("user.passwordPlaceholder"),
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
        },
        expressionProperties: {
          "templateOptions.label": this.translateService.stream("user.confirmPasswordLabel"),
          "templateOptions.placeholder": this.translateService.stream("user.confirmPasswordPlaceholder"),
        }
      }
    ]
  }]

  constructor(private readonly store: Store, private readonly translateService: TranslateService) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.store.dispatch(new RegisterUserAction(this.formGroup.value))
  }

}
