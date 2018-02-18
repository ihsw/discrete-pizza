import * as React from 'react';
import { configure, shallow } from 'enzyme';
import * as sinon from 'sinon';
import * as Adapter from 'enzyme-adapter-react-16';

import { PizzaSizes } from './PizzaSizes';

configure({ adapter: new Adapter() });

describe('PizzaSizes', () => {
    it('Renders correctly', () => {
        const spy = sinon.spy();
        const pizzaSizes = shallow(<PizzaSizes name="Adrian" fetchPizzaSizes={spy} />);
        expect(pizzaSizes.find('.greeting').text()).toEqual('Hello, Adrian');
        expect(spy.calledOnce).toBe(true);
    });
});
