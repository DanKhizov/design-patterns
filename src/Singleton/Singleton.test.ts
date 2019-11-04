import { Singleton } from "./Singleton";

describe("Singleton tests", () => {
  it("should be able to create new instance", () => {
    expect(Singleton.getInstance()).toBeInstanceOf(Singleton);
  });

  it("should return the same instance", () => {
    const singleton1 = Singleton.getInstance();
    const singleton2 = Singleton.getInstance();

    expect(singleton1).toBe(singleton2);
  });
});
