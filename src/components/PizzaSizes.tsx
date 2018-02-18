import * as React from 'react';

export interface Props {
    name: string;
}

export class PizzaSizes extends React.Component<Props> {
    render() {
        return (
            <div className="greeting">Hello, {this.props.name}</div>
        );
    }
}
