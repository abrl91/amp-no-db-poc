import { Injectable } from "@nestjs/common";
import { AddressServiceBase } from "./base/address.service.base";

@Injectable()
export class AddressService extends AddressServiceBase {
  constructor() {
    super();
  }
}
