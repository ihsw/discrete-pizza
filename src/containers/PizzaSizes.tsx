import { connect, Dispatch } from 'react-redux';

import { PizzaSizes, StateProps, DispatchProps, OwnProps } from '../components/PizzaSizes';
import { FetchPizzaSize, fetchPizzaSizes, selectPizzaSize } from '../actions';
import { StoreState, PizzaSize } from '../types';

export const mapStateToProps = ({ loading, pizzaSizes, currentPizzaSize }: StoreState): StateProps => {
    return {
        loading,
        pizzaSizes,
        currentPizzaSize
    };
};

export const mapDispatchToProps = (dispatch: Dispatch<FetchPizzaSize>): DispatchProps => {
    return {
        fetchPizzaSizes: () => dispatch(fetchPizzaSizes()),
        selectPizzaSize: (size: PizzaSize) => dispatch(selectPizzaSize(size))
    };
};

export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(PizzaSizes);
