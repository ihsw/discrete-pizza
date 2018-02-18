import * as React from 'react';

import { PizzaSize } from '../types';

export interface Props {
    name: string;
    fetchPizzaSizes: () => void;
    loading?: boolean;
    pizzaSizes?: PizzaSize[];
}

export class PizzaSizes extends React.Component<Props> {
    static defaultProps: Partial<Props> = {
        loading: false,
        pizzaSizes: []
    };

    componentDidMount() {
        this.props.fetchPizzaSizes();
    }

    render() {
        return (
            <div className="greeting">Hello, {this.props.name}</div>
        );
    }
}
