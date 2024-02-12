import type { Driver } from ".";

export class Sequence {
  private driver: Driver;
  constructor(driver: Driver) {
    this.driver = driver;
  }
}