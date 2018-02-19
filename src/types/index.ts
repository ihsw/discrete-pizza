export interface StoreState {
    pizzaSizes: PizzaSize[];
    loading: boolean;
    currentPizzaSize?: PizzaSize | null;
    selectedPizzaToppings?: SelectedPizzaTopping[] | null;
    pizzas?: SelectedPizza[] | null;
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

export interface SelectedPizzaTopping {
    quantity: number;
    topping: PizzaTopping;
}

export interface SelectedPizza {
    size: PizzaSize;
    toppings: SelectedPizzaTopping[];
}
