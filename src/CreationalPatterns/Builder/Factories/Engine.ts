import { CarType } from "../Car";

export class EngineFactory {
  public static buildEngine(carType: CarType): Engine {
    switch (carType) {
      case CarType.cabriolet:
        return new Engine(6, 200, EngineConfiguration.V);

      case CarType.hatchback:
        return new Engine(4, 150, EngineConfiguration.R);

      case CarType.sport:
        return new Engine(12, 600, EngineConfiguration.W);

      case CarType.suv:
        return new Engine(8, 350, EngineConfiguration.V);

      default:
        return null;
    }
  }
}

export enum EngineConfiguration {
  V = "V",
  R = "R",
  W = "W"
}

export class Engine {
  constructor(
    public cylindersCount: number,
    public horsePowers: number,
    public configuration: EngineConfiguration
  ) {}
}
