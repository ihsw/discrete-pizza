import * as React from 'react';

import { PizzaSize } from '../types';

export interface StateProps {
    loading: boolean;
    pizzaSizes: PizzaSize[];
    currentPizzaSize: PizzaSize | null;
}

export interface DispatchProps {
    fetchPizzaSizes: () => void;
    selectPizzaSize: (i: number) => void;
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
                Size: <button type="button" onClick={() => this.props.selectPizzaSize(i)}>{size.name}</button>
            </li>
        );
    }

    renderSize(size: PizzaSize | null) {
        if (!size) {
            return <p>Please select a pizza size.</p>;
        }

        return (
            <div>
                <p>Current size: {size.name}</p>
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
