import { Prototype, ComponentWithBackReference } from "./Prototype";

describe("Prototype tests", () => {
  const prototype = new Prototype();
  prototype.primitive = 10;
  prototype.component = { a: "Hello" };
  prototype.circularReference = new ComponentWithBackReference(prototype);

  const clone = prototype.clone();

  it("should copy primitives value", () => {
    expect(prototype.primitive).toStrictEqual(clone.primitive);
  });

  it("should not create new object in reference fields", () => {
    expect(prototype.component).not.toStrictEqual(clone.component);
  });

  it("should not create new object in circular reference", () => {
    expect(prototype.circularReference).not.toStrictEqual(
      clone.circularReference
    );
  });

  it("should be linked to the clone component with back reference", () => {
    expect(prototype.circularReference.prototype).not.toStrictEqual(
      clone.circularReference.prototype
    );
  });
});
