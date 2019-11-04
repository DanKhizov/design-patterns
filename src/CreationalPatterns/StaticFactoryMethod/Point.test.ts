import { Point } from "./Point";

describe("Factory method tests", () => {
  it("should implemented method of creating cartesian point", () => {
    const p1 = Point.createCartesianPoint(1, 5);

    expect(p1).toBeInstanceOf(Point);
  });

  it("should implemented method of creating polar point", () => {
    const p1 = Point.createPolarPoint(1, 5);

    expect(p1).toBeInstanceOf(Point);
  });

  it("should return diffrent points", () => {
    const p1 = Point.createCartesianPoint(1, 5);
    const p2 = Point.createPolarPoint(1, 5);

    expect(p1).not.toEqual(p2);
  });
});
