import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { GenerateResetPasswordTokenAction } from '../state/user.actions';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass']
})
export class ResetPasswordComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({})

  formConfig: FormlyFieldConfig[] = [{
    validators: {
      validation: [
        { name: 'emailValid', options: {errorPath: 'email'}}
      ]
    },
    fieldGroup: [
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
      }
    ]
  }]

  constructor(private readonly store: Store, private readonly translateService: TranslateService) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.store.dispatch(new GenerateResetPasswordTokenAction(this.formGroup.value))
  }

}
