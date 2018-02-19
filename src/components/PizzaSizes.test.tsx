import * as React from 'react';
import { configure, shallow } from 'enzyme';
import * as sinon from 'sinon';
import * as Adapter from 'enzyme-adapter-react-16';

import { PizzaSizes } from './PizzaSizes';

configure({ adapter: new Adapter() });

describe('PizzaSizes', () => {
    it('Has proper greeting', () => {
        const pizzaSizes = shallow((
            <PizzaSizes
                name="Adrian"
                loading={false}
                pizzaSizes={[]}
                fetchPizzaSizes={() => { return; }}
                selectPizzaSize={() => { return; }}
                currentPizzaSize={null}
                incrementToppingQuantity={() => { return; }}
                decrementToppingQuantity={() => { return; }}
            />
        ));
        expect(pizzaSizes.find('.greeting').text()).toEqual('Hello, Adrian');
    });

    it('Calls fetchPizzaSizes after mounting', () => {
        const spy = sinon.spy();
        shallow((
            <PizzaSizes
                name="Adrian"
                loading={false}
                pizzaSizes={[]}
                fetchPizzaSizes={spy}
                selectPizzaSize={() => { return; }}
                currentPizzaSize={null}
                incrementToppingQuantity={() => { return; }}
                decrementToppingQuantity={() => { return; }}
            />
        ));
        expect(spy.calledOnce).toBe(true);
    });

    it('Shows a loading message when loading', () => {
        const pizzaSizes = shallow((
            <PizzaSizes
                name="Adrian"
                loading={true}
                pizzaSizes={[]}
                fetchPizzaSizes={() => { return; }}
                selectPizzaSize={() => { return; }}
                currentPizzaSize={null}
                incrementToppingQuantity={() => { return; }}
                decrementToppingQuantity={() => { return; }}
            />
        ));
        expect(pizzaSizes.find('.greeting').length).toEqual(0);
        expect(pizzaSizes.find('.loading').length).toEqual(1);
    });

    it('Calls selectPizzaSize when clicking on a size', () => {
        const spy = sinon.spy();
        const pizzaSizes = shallow((
            <PizzaSizes
                name="Adrian"
                loading={false}
                pizzaSizes={[{
                    name: 'ayy',
                    basePrice: 9.99,
                    maxToppings: 1,
                    toppings: []
                }]}
                fetchPizzaSizes={() => { return; }}
                selectPizzaSize={spy}
                currentPizzaSize={null}
                incrementToppingQuantity={() => { return; }}
                decrementToppingQuantity={() => { return; }}
            />
        ));
        pizzaSizes.find('.pizza-size button').first().simulate('click');
        expect(spy.calledOnce).toBe(true);
    });
});
