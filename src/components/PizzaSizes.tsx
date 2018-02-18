import * as React from 'react';

import { PizzaSize } from '../types';

export interface StateProps {
    loading: boolean;
    pizzaSizes: PizzaSize[];
}

export interface DispatchProps {
    fetchPizzaSizes: () => void;
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

    render() {
        if (this.props.loading) {
            return <div className="loading">Loading...</div>;
        }

        return (
            <div>
                <p className="greeting">Hello, {this.props.name}</p>
                <p className="pizza-sizes">There are {this.props.pizzaSizes.length} pizza sizes.</p>
            </div>
        );
    }
}
