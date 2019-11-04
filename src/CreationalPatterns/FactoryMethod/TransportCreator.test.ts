import { TruckCreator, AirplaneCreator } from "./TransportCreator";
import { VehicleTypes, Truck, Airplane } from "./Transport";

describe("Factory Method tests", () => {
  describe("Truck Creator", () => {
    it("should work with truck vehicle type", () => {
      const vehicleType = new TruckCreator().getTransportType();

      expect(vehicleType).toStrictEqual(VehicleTypes.truck);
    });

    it("should return new instance of truck", () => {
      const truck = new TruckCreator().factoryMethod();

      expect(truck).toBeInstanceOf(Truck);
    });
  });

  describe("Airplane Creator", () => {
    it("should work with airplane vehicle type", () => {
      const vehicleType = new AirplaneCreator().getTransportType();

      expect(vehicleType).toStrictEqual(VehicleTypes.airplane);
    });

    it("should return new instance of airplane", () => {
      const airplane = new AirplaneCreator().factoryMethod();

      expect(airplane).toBeInstanceOf(Airplane);
    });
  });
});
