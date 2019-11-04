export class Point {
  private constructor(public x: number, public y: number) {}

  public static createCartesianPoint(x: number, y: number): Point {
    return new Point(x, y);
  }

  public static createPolarPoint(rho: number, theta: number): Point {
    const x = rho * Math.cos(theta);
    const y = rho * Math.sin(theta);

    return new Point(x, y);
  }
}
