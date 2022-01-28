import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { LoginControllerService, UserControllerService } from 'src/api/services';
import { LoginUSerAction, RegisterUserAction } from './user.actions';

export class UserStateModel {
  public token: string;
}

const defaults = {
  token: null
};

@State<UserStateModel>({
  name: 'user',
  defaults
})
@Injectable()
export class UserState {
  constructor(private readonly userService: UserControllerService, private readonly loginService: LoginControllerService) {}
  @Action(RegisterUserAction)
  registerUser({ dispatch }: StateContext<UserStateModel>, { user }: RegisterUserAction) {
    return this.userService.saveUser({body: user}).pipe(
      tap(response => dispatch(new Navigate(["/auth/login"])))
    )
  }
  @Action(LoginUSerAction)
  loginUser({ patchState }: StateContext<UserStateModel>, { login }: LoginUSerAction) {
    return this.loginService.authenticateUser({body: login}).pipe(
      tap(response => patchState)
    )
  }
}
