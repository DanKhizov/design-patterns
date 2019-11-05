import {
  Transmission,
  TransmissionFactory,
  Drivetrain,
  Gearbox
} from "./Transmission";
import { CarType } from "../Car";

describe("Factories transmission tests", () => {
  describe("Cabrio Factory", () => {
    it("should return instance of Transmission", () => {
      const transmission = TransmissionFactory.buildTransmission(
        CarType.cabriolet
      );
      expect(transmission).toBeInstanceOf(Transmission);
    });

    it("should have correct values", () => {
      const transmission = TransmissionFactory.buildTransmission(
        CarType.cabriolet
      );
      const transmissionValues = {
        gearCount: 6,
        drivetrain: Drivetrain.RWD,
        gearboxType: Gearbox.manual
      };

      expect(transmissionValues).toMatchObject(transmission);
    });
  });

  describe("Hatchback Factory", () => {
    it("should return instance of Transmission", () => {
      const transmission = TransmissionFactory.buildTransmission(
        CarType.hatchback
      );
      expect(transmission).toBeInstanceOf(Transmission);
    });

    it("should have correct values", () => {
      const transmission = TransmissionFactory.buildTransmission(
        CarType.hatchback
      );
      const transmissionValues = {
        gearCount: 5,
        drivetrain: Drivetrain.FWD,
        gearboxType: Gearbox.automatic
      };

      expect(transmissionValues).toMatchObject(transmission);
    });
  });

  describe("Sport Factory", () => {
    it("should return instance of Transmission", () => {
      const transmission = TransmissionFactory.buildTransmission(CarType.sport);
      expect(transmission).toBeInstanceOf(Transmission);
    });

    it("should have correct values", () => {
      const transmission = TransmissionFactory.buildTransmission(CarType.sport);
      const transmissionValues = {
        gearCount: 8,
        drivetrain: Drivetrain.RWD,
        gearboxType: Gearbox.manual
      };

      expect(transmissionValues).toMatchObject(transmission);
    });
  });

  describe("SUV Factory", () => {
    it("should return instance of Transmission", () => {
      const transmission = TransmissionFactory.buildTransmission(CarType.suv);
      expect(transmission).toBeInstanceOf(Transmission);
    });

    it("should have correct values", () => {
      const transmission = TransmissionFactory.buildTransmission(CarType.suv);
      const transmissionValues = {
        gearCount: 6,
        drivetrain: Drivetrain.AWD,
        gearboxType: Gearbox.automatic
      };

      expect(transmissionValues).toMatchObject(transmission);
    });
  });
});
