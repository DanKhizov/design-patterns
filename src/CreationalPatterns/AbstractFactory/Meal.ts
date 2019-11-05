export abstract class Meal {
  protected name: string;

  getName(): string {
    return this.name;
  }

  abstract isHealthy(): boolean;
  abstract getCalories(): number;
}

export class Cheeseburger extends Meal {
  constructor(name: string) {
    super();
    this.name = name;
  }

  isHealthy(): boolean {
    return false;
  }

  getCalories(): number {
    return 600;
  }
}

export class Salad extends Meal {
  constructor(name: string) {
    super();
    this.name = name;
  }

  isHealthy(): boolean {
    return true;
  }

  getCalories(): number {
    return 200;
  }
}
