import { LoginDto, UserDto } from "src/api/models";

export class RegisterUserAction {
  static readonly type = '[User] RegisterUserAction';
  constructor(public user: UserDto) { }
}

export class LoginUSerAction {
  static readonly type = '[User] LoginUserAction';
  constructor(public login: LoginDto) { }
}
