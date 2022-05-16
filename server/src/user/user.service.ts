import { Injectable } from "@nestjs/common";
import { UserServiceBase } from "./base/user.service.base";
import { PasswordService } from "../auth/password.service";

@Injectable()
export class UserService extends UserServiceBase {
  constructor() {
    super();
  }
}
