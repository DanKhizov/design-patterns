import { CarBuilder } from "./CarBuilder";
import { CarType } from "../Car";

export class CabrioBuilder extends CarBuilder {
  constructor() {
    super();
    this.carType = CarType.cabriolet;
    this.reset();
  }

  buildRoof() {
    const option = "Soft roof";

    this.car.addOption(option);
  }
}
