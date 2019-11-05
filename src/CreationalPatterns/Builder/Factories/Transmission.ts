import { CarType } from "../Car";

export class TransmissionFactory {
  public static buildTransmission(carType: CarType): Transmission {
    switch (carType) {
      case CarType.cabriolet:
        return new Transmission(6, Drivetrain.RWD, Gearbox.manual);

      case CarType.hatchback:
        return new Transmission(5, Drivetrain.FWD, Gearbox.automatic);

      case CarType.sport:
        return new Transmission(8, Drivetrain.RWD, Gearbox.manual);

      case CarType.suv:
        return new Transmission(6, Drivetrain.AWD, Gearbox.automatic);

      default:
        return null;
    }
  }
}

export enum Drivetrain {
  AWD,
  RWD,
  FWD
}

export enum Gearbox {
  automatic,
  manual
}

export class Transmission {
  constructor(
    public gearCount: number,
    public drivetrain: Drivetrain,
    public gearboxType: Gearbox
  ) {}
}
