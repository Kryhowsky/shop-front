import { LoginDto, UserDto } from "src/api/models";

export class RegisterUserAction {
  static readonly type = '[User] RegisterUserAction';
  constructor(public user: UserDto) { }
}

export class LoginUserAction {
  static readonly type = '[User] LoginUserAction';
  constructor(public login: LoginDto) { }
}

export class LogoutUserAction {
  static readonly type = '[User] LogoutUserAction';
  constructor() {}
}

export class LoginFromLocalStorageAction {
  static readonly type = '[User] LoginFromLocalStorageAction';
  constructor() {}
}

export class GetCurrentUserAction {
  static readonly type = '[User] GetCurrentUserAction';
  constructor() {}
}

export class GenerateResetPasswordTokenAction {
  static readonly type = '[User] GenerateResetPasswordTokenAction';
  constructor(public email: string) {}
}

export class ResetPasswordAction {
  static readonly type = '[User] ResetPasswordAction';
  constructor(public token: string, public password: string) {}
}
