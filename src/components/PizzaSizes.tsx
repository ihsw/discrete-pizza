import * as react from 'react';

export interface Props {
    name: string;
}

export class PizzaSizes extends react.Component<Props> {
    render() {
        return (
            <div className="greeting">Hello, {this.props.name}</div>
        );
    }
}
