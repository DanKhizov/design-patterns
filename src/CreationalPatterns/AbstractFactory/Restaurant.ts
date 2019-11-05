import { Drinkable, Tea, Soda } from "./Drinks";
import { Meal, Cheeseburger, Salad } from "./Meal";

export abstract class Restaurant {
  protected name: string;

  getName(): string {
    return this.name;
  }

  abstract createEat(): Meal;
  abstract createDrink(): Drinkable;
}

export class FastFood extends Restaurant {
  constructor(name: string) {
    super();
    this.name = name;
  }

  createEat(): Meal {
    return new Cheeseburger("Cheeseburger");
  }

  createDrink(): Drinkable {
    return new Soda("Coks");
  }
}

export class HealtyFood extends Restaurant {
  constructor(name: string) {
    super();
    this.name = name;
  }

  createEat(): Meal {
    return new Salad("Caesar");
  }

  createDrink(): Drinkable {
    return new Tea("Green tea");
  }
}
