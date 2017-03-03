import React from 'react'
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import jsdom from 'mocha-jsdom';

import MyComponent from './components/MyComponent'

describe('Render in DOM mit Event', () => {

    jsdom();

    it('Test Rendering -> Event abfragen', () => {
        const onClickEvent = expect.createSpy();
        const component = ReactTestUtils.renderIntoDocument(<MyComponent onClickEvent={onClickEvent}/>);

        const button = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'mybutton')

        ReactTestUtils.Simulate.click(button);

        expect(onClickEvent.calls.length).toBe(1);
    })
});

