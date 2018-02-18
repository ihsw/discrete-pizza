import * as React from 'react';

import { PizzaSize } from '../types';

export interface Props {
    name: string;
    fetchPizzaSizes?: () => void;
    loading?: boolean;
    pizzaSizes?: PizzaSize[];
}

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

        return <div className="greeting">Hello, {this.props.name}</div>;
    }
}
