import * as React from 'react';

import { PizzaSize, SelectedPizzaTopping, SelectedPizza } from '../types';
import { totalizePizza } from '../helper';

export interface StateProps {
    loading: boolean;
    pizzaSizes: PizzaSize[];
    currentPizzaSize?: PizzaSize | null;
    selectedPizzaToppings?: SelectedPizzaTopping[] | null;
}

export interface DispatchProps {
    fetchPizzaSizes: () => void;
    selectPizzaSize: (size: PizzaSize) => void;
    incrementToppingQuantity: (index: number) => void;
    decrementToppingQuantity: (index: number) => void;
    addPizza: (pizza: SelectedPizza) => void;
}

export interface OwnProps {
    name: string;
}

type Props = StateProps & DispatchProps & OwnProps;

export class PizzaSizes extends React.Component<Props> {
    static defaultProps: Partial<Props> = {
        loading: false,
        pizzaSizes: [],
        fetchPizzaSizes: () => { return; }
    };

    componentDidMount() {
        if (!this.props.fetchPizzaSizes) {
            return;
        }

        this.props.fetchPizzaSizes();
    }

    canIncrement(topping: SelectedPizzaTopping) {
        const currentPizza = this.props.currentPizzaSize;
        if (!currentPizza) {
            return false;
        }

        if (currentPizza.maxToppings === null) {
            return true;
        }

        const selectedToppings = this.props.selectedPizzaToppings;
        if (!selectedToppings) {
            return false;
        }

        const toppingQuantity = selectedToppings.reduce(
            (reducingQuantity: number, reducingTopping: SelectedPizzaTopping) => {
                return reducingQuantity + reducingTopping.quantity;
            },
            0
        );

        return toppingQuantity < currentPizza.maxToppings;
    }

    canDecrement(topping: SelectedPizzaTopping) {
        return topping.quantity > 0;
    }

    renderSizeItem(size: PizzaSize, i: number) {
        return (
            <li
                key={i}
                className="pizza-size"                
            >
                Size (${size.basePrice.toFixed(2)}):
                <button type="button" onClick={() => this.props.selectPizzaSize(size)}>{size.name}</button>
            </li>
        );
    }

    renderSelectedTopping(topping: SelectedPizzaTopping, i: number) {
        const cost = topping.topping.price * topping.quantity;

        return (
            <li
                key={i}
            >
                Topping: {topping.topping.name} (${cost.toFixed(2)}) x{topping.quantity}
                <button
                    type="button"
                    onClick={() => this.props.incrementToppingQuantity(i)}
                    disabled={!this.canIncrement(topping)}
                >
                    +
                </button>
                <button
                    type="button"
                    onClick={() => this.props.decrementToppingQuantity(i)}
                    disabled={!this.canDecrement(topping)}
                >
                    -
                </button>
            </li>
        );
    }

    renderSelectedToppings(selectedToppings?: SelectedPizzaTopping[] | null) {
        if (!selectedToppings) {
            return <p>This pizza has no toppings!</p>;
        }

        return (
            <ul>
                {selectedToppings.map((selectedTopping, i) => this.renderSelectedTopping(selectedTopping, i))}
            </ul>
        );
    }

    renderSize(size?: PizzaSize | null) {
        if (!size) {
            return <p>Please select a pizza size.</p>;
        }

        const toppings = this.props.selectedPizzaToppings ? this.props.selectedPizzaToppings : [];
        const maxToppings = size.maxToppings ? size.maxToppings : 'infinite';

        return (
            <div>
                <p>
                    Current size: {size.name} (max toppings: {maxToppings})
                </p>
                {this.renderSelectedToppings(this.props.selectedPizzaToppings)}
                <p>Cost: ${totalizePizza({ size, toppings }).toFixed(2)}</p>
                <button
                    type="button"
                    onClick={() => this.props.addPizza({ size, toppings })}
                >
                   Add to cart
                </button>
            </div>
        );
    }

    render() {
        if (this.props.loading) {
            return <div className="loading">Loading...</div>;
        }

        return (
            <div>
                <p className="greeting">Hello, {this.props.name}</p>
                <p className="pizza-sizes">There are {this.props.pizzaSizes.length} pizza sizes.</p>
                <hr />
                <ul>
                    {this.props.pizzaSizes.map((size, i) => this.renderSizeItem(size, i))}
                </ul>
                <hr />
                {this.renderSize(this.props.currentPizzaSize)}
            </div>
        );
    }
}
