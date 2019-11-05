import { CarBuilder } from "./CarBuilder";
import { CarType } from "../Car";

export class SUVBuilder extends CarBuilder {
  constructor() {
    super();
    this.carType = CarType.suv;
    this.reset();
  }

  buildWheels() {
    const option = "Big wheels";

    this.car.addOption(option);
  }
}
