import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PublicModule } from './components/public/public.module';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { AbstractControl } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

export function minLengthValidationMessages(err, field) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

export function fieldMatchValidator(control: AbstractControl) {
  const { password, confirmPassword } = control.value;

  if (!confirmPassword || !password) {
    return null;
  }

  if (confirmPassword === password) {
    return null;
  }

  return { fieldMatch: { message: 'Passwords not matching' } };
}

export function emailValidator(control: AbstractControl) {
  const { email } = control.value;
  const pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  if (!email) {
    return null;
  }

  if(pattern.test(email)) {
    return null
  }

  return { emailValid: { message: 'Incorrect email address' } };
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    PublicModule,
    NgxsModule.forRoot(),
    HttpClientModule,
    NgxsRouterPluginModule.forRoot(),
    FormlyModule.forRoot({
      validators: [
        { name: 'fieldMatch', validation: fieldMatchValidator },
        { name: 'emailValid', validation: emailValidator }
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: minLengthValidationMessages }
      ],
    }),
  ],
  // declarations: [
  //   AppComponent,
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
