import { Restaurant, FastFood, HealtyFood } from "./Restaurant";

class Human {
  constructor() {}

  goToRestaurant(restaurant: Restaurant) {
    const restaurantName = restaurant.getName();
    const drink = restaurant.createDrink();
    const meal = restaurant.createEat();

    console.log(`I'm going to ${restaurantName}`);
    console.log(`Eating ${meal.getName()} with ${meal.getCalories()} calories`);
    console.log(`Drinking ${drink.getName()}`);
  }
}

const human = new Human();
human.goToRestaurant(new FastFood("MacBurger"));
human.goToRestaurant(new HealtyFood("Mealty"));
