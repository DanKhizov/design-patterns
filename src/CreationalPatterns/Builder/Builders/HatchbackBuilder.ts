import { CarBuilder } from "./CarBuilder";
import { CarType } from "../Car";

export class HatchbackBuilder extends CarBuilder {
  constructor() {
    super();
    this.carType = CarType.hatchback;
    this.reset();
  }

  buildMusic() {
    const option = "Extra music";

    this.car.addOption(option);
  }
}
