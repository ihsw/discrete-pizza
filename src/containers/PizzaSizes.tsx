import { connect, Dispatch } from 'react-redux';

import { PizzaSizes, StateProps, DispatchProps, OwnProps } from '../components/PizzaSizes';
import { FetchPizzaSizesAction, fetchPizzaSizes } from '../actions';
import { StoreState } from '../types';

export const mapStateToProps = ({ loading, pizzaSizes }: StoreState): StateProps => {
    return {
        loading,
        pizzaSizes
    };
};

export const mapDispatchToProps = (dispatch: Dispatch<FetchPizzaSizesAction>): DispatchProps => {
    return {
        fetchPizzaSizes: () => dispatch(fetchPizzaSizes())
    };
};

export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(PizzaSizes);
