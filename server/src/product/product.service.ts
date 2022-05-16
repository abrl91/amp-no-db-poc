import { Injectable } from "@nestjs/common";
import { ProductServiceBase } from "./base/product.service.base";

@Injectable()
export class ProductService extends ProductServiceBase {
  constructor() {
    super();
  }
}
