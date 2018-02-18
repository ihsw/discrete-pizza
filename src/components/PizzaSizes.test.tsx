import * as React from 'react';
import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { PizzaSizes } from './PizzaSizes';

configure({ adapter: new Adapter() });

describe('PizzaSizes', () => {
    it('Renders correctly', () => {
        const pizzaSizes = shallow(<PizzaSizes name="Adrian" />);
        expect(pizzaSizes.find('.greeting').text()).toEqual('Hello, Adrian');
    });
});
