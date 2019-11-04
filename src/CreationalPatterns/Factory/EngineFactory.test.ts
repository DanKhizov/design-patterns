import { LowPowerEngine, SuperPowerEngine } from "./Engine";
import { EngineFactory, EngineTypes } from "./EngineFactory";

describe("Factory tests", () => {
  it("should be able to create new low power engine", () => {
    const engine = new LowPowerEngine();

    expect(engine).toBeDefined();
  });

  it("should be able to create new super-puper power engine", () => {
    const engine = new SuperPowerEngine();

    expect(engine).toBeDefined();
  });

  it("should return new low power engine", () => {
    const lowPowerEngine = EngineFactory.getEngine(EngineTypes.lowPowerEngine);

    expect(lowPowerEngine).toBeInstanceOf(LowPowerEngine);
  });

  it("should return new super power engine", () => {
    const superPowerEngine = EngineFactory.getEngine(
      EngineTypes.superPowerEngine
    );

    expect(superPowerEngine).toBeInstanceOf(SuperPowerEngine);
  });
});
