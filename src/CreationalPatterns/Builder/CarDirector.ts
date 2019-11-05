import { CabrioBuilder } from "./Builders/CabrioBuilder";
import { HatchbackBuilder } from "./Builders/HatchbackBuilder";
import { SportCarBuilder } from "./Builders/SportCarBuilder";
import { SUVBuilder } from "./Builders/SUVBuilder";
import { Car } from "./Car";
import { CarBuilder } from "./Builders/CarBuilder";

export class CarDirector {
  private cabrioBuilder: CabrioBuilder;
  private hatchbackBuilder: HatchbackBuilder;
  private sportCarBuilder: SportCarBuilder;
  private suvBuilder: SUVBuilder;

  constructor() {
    this.cabrioBuilder = new CabrioBuilder();
    this.hatchbackBuilder = new HatchbackBuilder();
    this.sportCarBuilder = new SportCarBuilder();
    this.suvBuilder = new SUVBuilder();
  }

  private getBaseCar(builder: CarBuilder) {
    builder.buildBody();
    builder.buildEngine();
    builder.buildTransmission();
  }

  public getCabriolet(): Car {
    this.getBaseCar(this.cabrioBuilder);
    this.cabrioBuilder.buildRoof();

    return this.cabrioBuilder.getResult();
  }

  public getHatchback(): Car {
    this.getBaseCar(this.hatchbackBuilder);
    this.hatchbackBuilder.buildMusic();

    return this.hatchbackBuilder.getResult();
  }

  public getSportCar(): Car {
    this.getBaseCar(this.sportCarBuilder);
    this.sportCarBuilder.buildSuspension();

    return this.sportCarBuilder.getResult();
  }

  public getSUV(): Car {
    this.getBaseCar(this.suvBuilder);
    this.suvBuilder.buildWheels();

    return this.suvBuilder.getResult();
  }
}
