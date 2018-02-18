import { connect, Dispatch } from 'react-redux';

import { PizzaSizes, Props } from '../components/PizzaSizes';
import { FetchPizzaSizesAction, fetchPizzaSizes } from '../actions';
import { StoreState } from '../types';

export const mapStateToProps = ({ loading, pizzaSizes }: StoreState): Partial<Props> => {
    return {
        loading,
        pizzaSizes
    };
};

export const mapDispatchToProps = (dispatch: Dispatch<FetchPizzaSizesAction>): Partial<Props> => {
    return {
        fetchPizzaSizes: () => dispatch(fetchPizzaSizes())
    };
};

export default connect<Partial<Props>>(mapStateToProps, mapDispatchToProps)(PizzaSizes);
