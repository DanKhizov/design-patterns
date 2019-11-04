import { Engine, LowPowerEngine, SuperPowerEngine } from "./Engine";

export enum EngineTypes {
  lowPowerEngine,
  superPowerEngine
}

export class EngineFactory {
  public static getEngine(engineType: EngineTypes): Engine {
    switch (engineType) {
      case EngineTypes.lowPowerEngine:
        return new LowPowerEngine();

      case EngineTypes.superPowerEngine:
        return new SuperPowerEngine();

      default:
        return null;
    }
  }
}
