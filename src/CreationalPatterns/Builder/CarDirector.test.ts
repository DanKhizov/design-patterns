import { CarDirector } from "./CarDirector";
import { Car } from "./Car";

describe("CarDirector tests", () => {
  describe("Car of type Cabriolet", () => {
    it("should return instance of Car", () => {
      const director = new CarDirector();

      expect(director.getCabriolet()).toBeInstanceOf(Car);
    });

    it("should return instance with filled fields", () => {
      const cabrio = new CarDirector().getCabriolet();
      console.log(cabrio);

      const cabrioOptions = {
        _body: { doorsCount: 2, weight: 1600, hasRoof: false },
        _engine: { cylindersCount: 6, horsePowers: 200, configuration: "V" },
        _transmission: { gearCount: 6, drivetrain: 1, gearboxType: 1 },
        _options: ["Soft roof"]
      };

      expect(cabrio).toEqual(cabrioOptions);
    });
  });

  describe("Car of type Hatchback", () => {
    it("should return instance of Car", () => {
      const director = new CarDirector();

      expect(director.getHatchback()).toBeInstanceOf(Car);
    });

    it("should return instance with filled fields", () => {
      const hatchback = new CarDirector().getHatchback();
      const hatchbackOptions = {
        _body: { doorsCount: 4, weight: 1200, hasRoof: true },
        _engine: { cylindersCount: 4, horsePowers: 150, configuration: "R" },
        _transmission: { gearCount: 5, drivetrain: 2, gearboxType: 0 },
        _options: ["Extra music"]
      };

      expect(hatchback).toEqual(hatchbackOptions);
    });
  });

  describe("Car of type Sport", () => {
    it("should return instance of Car", () => {
      const director = new CarDirector();

      expect(director.getSportCar()).toBeInstanceOf(Car);
    });

    it("should return instance with filled fields", () => {
      const sportCar = new CarDirector().getSportCar();
      const sportCarOptions = {
        _body: { doorsCount: 2, weight: 1400, hasRoof: true },
        _engine: { cylindersCount: 12, horsePowers: 600, configuration: "W" },
        _transmission: { gearCount: 8, drivetrain: 1, gearboxType: 1 },
        _options: ["Sport suspension"]
      };

      expect(sportCar).toEqual(sportCarOptions);
    });
  });

  describe("Car of type SUV", () => {
    it("should return instance of Car", () => {
      const director = new CarDirector();

      expect(director.getSUV()).toBeInstanceOf(Car);
    });

    it("should return instance with filled fields", () => {
      const suv = new CarDirector().getSUV();
      const suvOptions = {
        _body: { doorsCount: 4, weight: 2500, hasRoof: true },
        _engine: { cylindersCount: 8, horsePowers: 350, configuration: "V" },
        _transmission: { gearCount: 6, drivetrain: 0, gearboxType: 0 },
        _options: ["Big wheels"]
      };

      expect(suv).toEqual(suvOptions);
    });
  });
});
