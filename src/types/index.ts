export interface StoreState {
    pizzaSizes: Object[];
}

export interface GetPizzaSizesData {
    pizzaSizes: PizzaSize[];
}

export interface PizzaSize {
    name: string;
    basePrice: number;
    maxToppings: number;
    toppings: PizzaToppingField[];
}

export interface PizzaToppingField {
    topping: PizzaTopping;
    defaultSelected: boolean;
}

export interface PizzaTopping {
    name: string;
    price: number;
}