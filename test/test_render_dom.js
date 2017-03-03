import React from 'react'
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import jsdom from 'mocha-jsdom';

import DialgArea from '../src/client/components/zako/dialog/DialogArea'


describe('Render in DOM', () => {
    jsdom();

    it('Test Render in DOM -> pruefe Title', () => {
        var title = "Shallow Rendering";
        const component = ReactTestUtils.renderIntoDocument(<DialgArea title={title} child="" />)

        expect(title).toEqual(component.props.title);
    })
});
