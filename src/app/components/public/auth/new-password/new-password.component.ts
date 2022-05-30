import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { ResetPasswordAction } from '../state/user.actions';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.sass']
})
export class NewPasswordComponent implements OnInit {

  token: string

  formGroup: FormGroup = new FormGroup({})

  formConfig: FormlyFieldConfig[] = [{
    validators: {
      validation: [
        { name: 'fieldMatch', options: { errorPath: 'confirmPassword' } }
      ]
    },
    fieldGroup: [
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

  constructor(private readonly store: Store, private readonly activatedRoute: ActivatedRoute, private readonly translateService: TranslateService) { }

  ngOnInit(): void {
    // this.token = this.activatedRoute.params["token"]
    this.activatedRoute.queryParams.subscribe(params => {
      this.token = params['token']
    })
  }

  submit(): void {
    this.store.dispatch(new ResetPasswordAction(this.token, this.formGroup.value["password"])) // {...this.formGroup.value, token: this.token}
  }

}
