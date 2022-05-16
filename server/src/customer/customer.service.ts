import { Injectable } from "@nestjs/common";
import { CustomerServiceBase } from "./base/customer.service.base";

@Injectable()
export class CustomerService extends CustomerServiceBase {
  constructor() {
    super();
  }
}
