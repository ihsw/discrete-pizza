import * as React from 'react';
import { configure, shallow } from 'enzyme';
import * as sinon from 'sinon';
import * as Adapter from 'enzyme-adapter-react-16';

import { PizzaSizes } from './PizzaSizes';

configure({ adapter: new Adapter() });

describe('PizzaSizes', () => {
    it('Has proper greeting', () => {
        const pizzaSizes = shallow(<PizzaSizes name="Adrian" fetchPizzaSizes={() => { return; }} />);
        expect(pizzaSizes.find('.greeting').text()).toEqual('Hello, Adrian');
    });

    it('Calls fetchPizzaSizes after mounting', () => {
        const spy = sinon.spy();
        shallow(<PizzaSizes name="Adrian" fetchPizzaSizes={spy} />);
        expect(spy.calledOnce).toBe(true);
    });
});
