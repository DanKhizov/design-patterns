import { CarBuilder } from "./CarBuilder";
import { CarType } from "../Car";

export class SportCarBuilder extends CarBuilder {
  constructor() {
    super();
    this.carType = CarType.sport;
    this.reset();
  }

  buildSuspension() {
    const option = "Sport suspension";

    this.car.addOption(option);
  }
}
