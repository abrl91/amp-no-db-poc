import { Injectable } from "@nestjs/common";

@Injectable()
export class HealthServiceBase {
  constructor() {}
  async isDbReady(): Promise<boolean> {
    try {
      return true;
    } catch (error) {
      return false;
    }
  }
}
