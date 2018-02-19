import * as React from 'react';

import { SelectedPizza, SelectedPizzaTopping } from '../types';
import { totalizePizza } from '../helper';

export interface StateProps {
    pizzas?: SelectedPizza[] | null;
}

export interface DispatchProps {
}

export interface OwnProps {
}

type Props = StateProps & DispatchProps & OwnProps;

export class Cart extends React.Component<Props> {
    renderTopping(topping: SelectedPizzaTopping, i: number) {
        return (
            <li key={i}>{topping.topping.name} x{topping.quantity}</li>
        );
    }

    renderPizza(pizza: SelectedPizza, i: number) {
        return (
            <li
                key={i}
            >
                Size: {pizza.size.name} (${totalizePizza(pizza).toFixed(2)})
                <ul>
                    {pizza.toppings.map((topping, toppingIndex) => this.renderTopping(topping, toppingIndex))}
                </ul>
            </li>
        );
    }

    renderPizzas(pizzas?: SelectedPizza[] | null) {
        if (!pizzas) {
            return <p>No pizzas in cart!</p>;
        }

        const totalCost = pizzas.reduce(
            (cost, pizza) => cost + totalizePizza(pizza),
            0
        );
        
        return (
            <div>
                <p>Shopping Cart</p>
                <ul>
                    {pizzas.map((pizza, i) => this.renderPizza(pizza, i))}
                </ul>
                <p>Total cost: ${totalCost.toFixed(2)}</p>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderPizzas(this.props.pizzas)}
            </div>
        );
    }
}
