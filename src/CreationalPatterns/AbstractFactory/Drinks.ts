export abstract class Drinkable {
  protected name: string;

  getName(): string {
    return this.name;
  }

  abstract isSweet(): boolean;
  abstract isHot(): boolean;
}

export class Tea extends Drinkable {
  constructor(name: string) {
    super();
    this.name = name;
  }

  isSweet(): boolean {
    return false;
  }

  isHot(): boolean {
    return true;
  }
}

export class Soda extends Drinkable {
  constructor(name: string) {
    super();
    this.name = name;
  }

  isSweet(): boolean {
    return true;
  }

  isHot(): boolean {
    return false;
  }
}
