import { CarType } from "../Car";

export class BodyFactory {
  public static buildBody(carType: CarType): Body {
    switch (carType) {
      case CarType.cabriolet:
        return new Body(2, 1600, false);

      case CarType.hatchback:
        return new Body(4, 1200, true);

      case CarType.sport:
        return new Body(2, 1400, true);

      case CarType.suv:
        return new Body(4, 2500, true);

      default:
        return null;
    }
  }
}

export class Body {
  constructor(
    public doorsCount: number,
    public weight: number,
    public hasRoof: boolean
  ) {}
}
