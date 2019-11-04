import { CargoVehicle, Airplane, Truck } from "./Transport";

abstract class TransportCreator {
  public abstract factoryMethod(): CargoVehicle;

  public getTransportType(): string {
    const vehicle = this.factoryMethod();

    return vehicle.getVehicleType();
  }
}

export class AirplaneCreator extends TransportCreator {
  public factoryMethod(): CargoVehicle {
    return new Airplane();
  }
}

export class TruckCreator extends TransportCreator {
  public factoryMethod(): CargoVehicle {
    return new Truck();
  }
}

new TruckCreator().getTransportType();
new AirplaneCreator().getTransportType();
