import { Injectable } from "@nestjs/common";
import { OrderServiceBase } from "./base/order.service.base";

@Injectable()
export class OrderService extends OrderServiceBase {
  constructor() {
    super();
  }
}
