import { connect, Dispatch } from 'react-redux';

import { PizzaSizes, StateProps, DispatchProps, OwnProps } from '../components/PizzaSizes';
import {
    FetchPizzaSize,
    fetchPizzaSizes,
    selectPizzaSize,
    incrementToppingQuantity,
    decrementToppingQuantity,
    addPizza
} from '../actions';
import { StoreState, PizzaSize, SelectedPizza } from '../types';

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
        decrementToppingQuantity: (index: number) => dispatch(decrementToppingQuantity(index)),
        addPizza: (pizza: SelectedPizza) => dispatch(addPizza(pizza))
    };
};

export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(PizzaSizes);
