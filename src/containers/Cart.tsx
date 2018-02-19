import { connect, Dispatch } from 'react-redux';

import { Cart, StateProps, DispatchProps, OwnProps } from '../components/Cart';
import { StoreState } from '../types';

export const mapStateToProps = (state: StoreState): StateProps => {
    const { pizzas } = state;
    return {
        pizzas
    };
};

export const mapDispatchToProps = (dispatch: Dispatch<Cart>): DispatchProps => {
    return {
    };
};

export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
