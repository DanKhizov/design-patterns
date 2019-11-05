import { Body, BodyFactory } from "./Body";
import { CarType } from "../Car";

describe("Factories body tests", () => {
  describe("Cabrio Factory", () => {
    it("should return instance of Body", () => {
      const body = BodyFactory.buildBody(CarType.cabriolet);
      expect(body).toBeInstanceOf(Body);
    });

    it("should have correct values", () => {
      const body = BodyFactory.buildBody(CarType.cabriolet);
      const bodyValues = {
        doorsCount: 2,
        weight: 1600,
        hasRoof: false
      };

      expect(bodyValues).toMatchObject(body);
    });
  });

  describe("Hatchback Factory", () => {
    it("should return instance of Body", () => {
      const body = BodyFactory.buildBody(CarType.hatchback);
      expect(body).toBeInstanceOf(Body);
    });

    it("should have correct values", () => {
      const body = BodyFactory.buildBody(CarType.hatchback);
      const bodyValues = {
        doorsCount: 4,
        weight: 1200,
        hasRoof: true
      };

      expect(bodyValues).toMatchObject(body);
    });
  });

  describe("Sport Factory", () => {
    it("should return instance of Body", () => {
      const body = BodyFactory.buildBody(CarType.sport);
      expect(body).toBeInstanceOf(Body);
    });

    it("should have correct values", () => {
      const body = BodyFactory.buildBody(CarType.sport);
      const bodyValues = {
        doorsCount: 2,
        weight: 1400,
        hasRoof: true
      };

      expect(bodyValues).toMatchObject(body);
    });
  });

  describe("SUV Factory", () => {
    it("should return instance of Body", () => {
      const body = BodyFactory.buildBody(CarType.suv);
      expect(body).toBeInstanceOf(Body);
    });

    it("should have correct values", () => {
      const body = BodyFactory.buildBody(CarType.suv);
      const bodyValues = {
        doorsCount: 4,
        weight: 2500,
        hasRoof: true
      };

      expect(bodyValues).toMatchObject(body);
    });
  });
});
