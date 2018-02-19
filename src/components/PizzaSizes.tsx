import * as React from 'react';

import { PizzaSize, SelectedPizzaTopping } from '../types';

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

    renderSizeItem(size: PizzaSize, i: number) {
        return (
            <li
                key={i}
                className="pizza-size"                
            >
                Size: <button type="button" onClick={() => this.props.selectPizzaSize(size)}>{size.name}</button>
            </li>
        );
    }

    renderSelectedTopping(topping: SelectedPizzaTopping, i: number) {
        return (
            <li
                key={i}
            >
                Topping: {topping.topping.name} x{topping.quantity}
                <button type="button" onClick={() => this.props.incrementToppingQuantity(i)}>+</button>
                <button type="button" onClick={() => this.props.decrementToppingQuantity(i)}>-</button>
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

        return (
            <div>
                <p>Current size: {size.name}</p>
                {this.renderSelectedToppings(this.props.selectedPizzaToppings)}
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
                <ul>
                    {this.props.pizzaSizes.map((size, i) => this.renderSizeItem(size, i))}
                </ul>
                {this.renderSize(this.props.currentPizzaSize)}
            </div>
        );
    }
}
