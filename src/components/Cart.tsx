import * as React from 'react';

import { SelectedPizza } from '../types';

export interface StateProps {
    pizzas?: SelectedPizza[] | null;
}

export interface DispatchProps {
}

export interface OwnProps {
}

type Props = StateProps & DispatchProps & OwnProps;

export class Cart extends React.Component<Props> {
    renderPizza(pizza: SelectedPizza, i: number) {
        return (
            <li
                key={i}
            >
                Size: {pizza.size.name}
            </li>
        );
    }

    renderPizzas(pizzas?: SelectedPizza[] | null) {
        if (!pizzas) {
            return <p>No pizzas in cart!</p>;
        }
        
        return (
            <ul>
                {pizzas.map((pizza, i) => this.renderPizza(pizza, i))}
            </ul>
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
