import React from 'react'
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';

import DialgArea from '../src/client/components/zako/dialog/DialogArea'


describe('Shallow rendering', () => {

    it('Test Shallow Rendering Anzahl Kinder', () => {
        const renderer = ReactTestUtils.createRenderer();
        renderer.render(<DialgArea title="Shallow Rendering" child="" />)

        const tree = renderer.getRenderOutput();

        expect(tree.props.children.length).toEqual(2);
    })

    it('Test Shallow Rendering / Zugriff auf Komponente', () => {
        const renderer = ReactTestUtils.createRenderer();
        renderer.render(<DialgArea title="Shallow Rendering" child="<input/>" />)

        const tree = renderer.getRenderOutput();

        var title = tree.props.children[0];
        expect(title.props.children).toEqual("Shallow Rendering");

        var inputfield = tree.props.children[1];
        expect(inputfield.props.children).toEqual("<input/>");
    })
});

