import { SelectedPizza } from './types';

export const totalizePizza = (pizza: SelectedPizza): number => pizza.toppings.reduce(
    (basePrice, topping) => basePrice + topping.quantity * topping.topping.price,
    pizza.size.basePrice
);
