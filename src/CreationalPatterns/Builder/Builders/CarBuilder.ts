import { Car, CarType } from "../Car";
import { BodyFactory } from "../Factories/Body";
import { EngineFactory } from "../Factories/Engine";
import { TransmissionFactory } from "../Factories/Transmission";

export abstract class CarBuilder {
  protected carType: CarType;
  protected car: Car;

  buildBody(): void {
    const body = BodyFactory.buildBody(this.carType);
    this.car.body = body;
  }

  buildEngine(): void {
    const engine = EngineFactory.buildEngine(this.carType);
    this.car.engine = engine;
  }

  buildTransmission(): void {
    const transmission = TransmissionFactory.buildTransmission(this.carType);
    this.car.transmission = transmission;
  }

  reset(): void {
    this.car = new Car();
  }

  getResult(): Car {
    const car = this.car;
    this.reset();

    return car;
  }
}
