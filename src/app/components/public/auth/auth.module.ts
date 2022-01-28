import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { LoginComponent } from './login/login.component';
import { NgxsModule } from '@ngxs/store';
import { UserState } from './state/user.state';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "login",
        component: LoginComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    MatButtonModule,
    NgxsModule.forFeature([UserState])
  ]
})
export class AuthModule { }
