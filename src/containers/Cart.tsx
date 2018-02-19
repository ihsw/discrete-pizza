import { connect, Dispatch } from 'react-redux';

import { Cart, StateProps, DispatchProps, OwnProps } from '../components/Cart';
import { removePizza } from '../actions';
import { StoreState } from '../types';

export const mapStateToProps = (state: StoreState): StateProps => {
    const { pizzas } = state;
    return {
        pizzas
    };
};

export const mapDispatchToProps = (dispatch: Dispatch<Cart>): DispatchProps => {
    return {
        removePizza: (index: number) => dispatch(removePizza(index))
    };
};

export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
