import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { LoginUserAction } from '../state/user.actions';

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
        required: true
      },
      expressionProperties: {
        "templateOptions.label": this.translateService.stream("user.passwordLabel"),
        "templateOptions.placeholder": this.translateService.stream("user.passwordPlaceholder"),
      }
    }
  ]

  constructor(private readonly store: Store, private readonly translateService: TranslateService) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.store.dispatch(new LoginUserAction(this.formGroup.value))
  }

}
