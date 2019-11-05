import { Engine, EngineFactory, EngineConfiguration } from "./Engine";
import { CarType } from "../Car";

describe("Factories engine tests", () => {
  describe("Cabrio Factory", () => {
    it("should return instance of Engine", () => {
      const engine = EngineFactory.buildEngine(CarType.cabriolet);
      expect(engine).toBeInstanceOf(Engine);
    });

    it("should have correct values", () => {
      const engine = EngineFactory.buildEngine(CarType.cabriolet);
      const engineValues = {
        cylindersCount: 6,
        horsePowers: 200,
        configuration: EngineConfiguration.V
      };

      expect(engineValues).toMatchObject(engine);
    });
  });

  describe("Hatchback Factory", () => {
    it("should return instance of Engine", () => {
      const engine = EngineFactory.buildEngine(CarType.hatchback);
      expect(engine).toBeInstanceOf(Engine);
    });

    it("should have correct values", () => {
      const engine = EngineFactory.buildEngine(CarType.hatchback);
      const engineValues = {
        cylindersCount: 4,
        horsePowers: 150,
        configuration: EngineConfiguration.R
      };

      expect(engineValues).toMatchObject(engine);
    });
  });

  describe("Sport Factory", () => {
    it("should return instance of Engine", () => {
      const engine = EngineFactory.buildEngine(CarType.sport);
      expect(engine).toBeInstanceOf(Engine);
    });

    it("should have correct values", () => {
      const engine = EngineFactory.buildEngine(CarType.sport);
      const engineValues = {
        cylindersCount: 12,
        horsePowers: 600,
        configuration: EngineConfiguration.W
      };

      expect(engineValues).toMatchObject(engine);
    });
  });

  describe("SUV Factory", () => {
    it("should return instance of Engine", () => {
      const engine = EngineFactory.buildEngine(CarType.suv);
      expect(engine).toBeInstanceOf(Engine);
    });

    it("should have correct values", () => {
      const engine = EngineFactory.buildEngine(CarType.suv);
      const engineValues = {
        cylindersCount: 8,
        horsePowers: 350,
        configuration: EngineConfiguration.V
      };

      expect(engineValues).toMatchObject(engine);
    });
  });
});
