import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs';
import { UserDto } from 'src/api/models';
import { LoginControllerService, UserControllerService } from 'src/api/services';
import { GetCurrentUserAction, LoginFromLocalStorageAction, LoginUserAction, LogoutUserAction, RegisterUserAction } from './user.actions';

export class UserStateModel {
  public token: string;
  public currentUser: UserDto;
}

const defaults = {
  token: null,
  currentUser: null
};

@State<UserStateModel>({
  name: 'user',
  defaults
})

@Injectable()
export class UserState {
  constructor(private readonly userService: UserControllerService, private readonly loginService: LoginControllerService) { }

  @Selector()
  static currentUser(userStateModel: UserStateModel) {
    return userStateModel.currentUser
  }

  @Selector()
  static token(userStateModel: UserStateModel) {
    return userStateModel.token
  }

  @Action(RegisterUserAction)
  registerUser({ dispatch }: StateContext<UserStateModel>, { user }: RegisterUserAction) {
    return this.userService.saveUser({ body: user }).pipe(
      tap(response => dispatch(new Navigate(["/auth/login"])))
    )
  }

  @Action(LoginUserAction)
  loginUser({ patchState, dispatch }: StateContext<UserStateModel>, { login }: LoginUserAction) {
    return this.loginService.authenticateUser({ body: login }).pipe(
      tap(response => {
        patchState({
          token: response.token
        })
        localStorage.setItem("token", response.token)
        dispatch(new GetCurrentUserAction())
        dispatch(new Navigate(["/product/list"]))
      })
    )
  }

  @Action(LogoutUserAction)
  logoutUser({ patchState }: StateContext<UserStateModel>) {
    patchState({
      token: null,
      currentUser: null
    })
    localStorage.removeItem("token")
  }

  @Action(LoginFromLocalStorageAction)
  loginFromLocalStorage( { patchState, dispatch }: StateContext<UserStateModel> ) {
    const token = localStorage.getItem("token");

    if (token) {
      patchState({
        token
      })
      dispatch(new GetCurrentUserAction())
    }

  }

  @Action(GetCurrentUserAction)
  getCurrentUser( { patchState }: StateContext<UserStateModel> ) {
    return this.userService.getCurrentUser().pipe(
      tap(response => patchState({currentUser: response}))
    )
  }

}
