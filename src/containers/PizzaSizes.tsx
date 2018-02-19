import { connect, Dispatch } from 'react-redux';

import { PizzaSizes, StateProps, DispatchProps, OwnProps } from '../components/PizzaSizes';
import {
    FetchPizzaSize,
    fetchPizzaSizes,
    selectPizzaSize,
    incrementToppingQuantity,
    decrementToppingQuantity
} from '../actions';
import { StoreState, PizzaSize } from '../types';

export const mapStateToProps = (state: StoreState): StateProps => {
    const { loading, pizzaSizes, currentPizzaSize, selectedPizzaToppings } = state;
    return {
        loading,
        pizzaSizes,
        currentPizzaSize,
        selectedPizzaToppings
    };
};

export const mapDispatchToProps = (dispatch: Dispatch<FetchPizzaSize>): DispatchProps => {
    return {
        fetchPizzaSizes: () => dispatch(fetchPizzaSizes()),
        selectPizzaSize: (size: PizzaSize) => dispatch(selectPizzaSize(size)),
        incrementToppingQuantity: (index: number) => dispatch(incrementToppingQuantity(index)),
        decrementToppingQuantity: (index: number) => dispatch(decrementToppingQuantity(index))
    };
};

export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(PizzaSizes);
