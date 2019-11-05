import { Body } from "./Factories/Body";
import { Engine } from "./Factories/Engine";
import { Transmission } from "./Factories/Transmission";
import { thisExpression } from "@babel/types";

export enum CarType {
  sport,
  hatchback,
  cabriolet,
  suv
}

export class Car {
  private _engine: Engine;
  private _body: Body;
  private _transmission: Transmission;
  private _options: string[];

  constructor() {
    this.body = null;
    this.engine = null;
    this.transmission = null;
    this._options = [];
  }

  public get engine(): Engine {
    return this._engine;
  }

  public set engine(engine: Engine) {
    this._engine = engine;
  }

  public get body(): Body {
    return this._body;
  }

  public set body(body: Body) {
    this._body = body;
  }

  public get transmission(): Transmission {
    return this._transmission;
  }

  public set transmission(transmission: Transmission) {
    this._transmission = transmission;
  }

  public addOption(option: string) {
    this._options.push(option);
  }

  public removeOption(option: string) {
    this._options = this._options.filter(
      settedOption => settedOption !== option
    );
  }
}
