import * as React from 'react';

export interface Props {
    name: string;
    fetchPizzaSizes: () => void;
}

export class PizzaSizes extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchPizzaSizes();
    }

    render() {
        return (
            <div className="greeting">Hello, {this.props.name}</div>
        );
    }
}
