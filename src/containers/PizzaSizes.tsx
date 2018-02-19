import { connect, Dispatch } from 'react-redux';

import { PizzaSizes, StateProps, DispatchProps, OwnProps } from '../components/PizzaSizes';
import { FetchPizzaSize, fetchPizzaSizes, selectPizzaSize } from '../actions';
import { StoreState } from '../types';

export const mapStateToProps = ({ loading, pizzaSizes, currentSizeIndex }: StoreState): StateProps => {
    let currentPizzaSize = null;
    if (typeof currentSizeIndex !== 'undefined' && currentSizeIndex !== null) {
        currentPizzaSize = pizzaSizes[currentSizeIndex];
    }
    return {
        loading,
        pizzaSizes,
        currentPizzaSize: currentPizzaSize
    };
};

export const mapDispatchToProps = (dispatch: Dispatch<FetchPizzaSize>): DispatchProps => {
    return {
        fetchPizzaSizes: () => dispatch(fetchPizzaSizes()),
        selectPizzaSize: (index: number) => dispatch(selectPizzaSize(index))
    };
};

export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(PizzaSizes);
