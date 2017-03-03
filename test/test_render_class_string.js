import expect from 'expect';
import React from 'react'

import DialgArea from '../src/client/components/zako/dialog/DialogArea'

import {renderToStaticMarkup} from 'react-dom/server';

describe('Render Komponente als String', () => {
    it('DialogArea richtiger Titel ....', () =>  {
        const child = <div></div>;
        const result = renderToStaticMarkup(<DialgArea title="Testdialog" child={child} />);
        const expected = "<div class=\"headerlineDiv\"><div class=\"headerline\">Testdialog</div><div class=\"dialogareachild\"><div></div></div></div>";

        expect(expected).toBe(result);
    })


    it('DialogArea richtiges Kind ....', () =>  {

        const child = <div><input type="text" value="Hallo"/></div>;
        const result = renderToStaticMarkup(<DialgArea title="Testdialog" child={child} />);
        const expected = "<div class=\"headerlineDiv\"><div class=\"headerline\">Testdialog</div><div class=\"dialogareachild\"><div><input type=\"text\" value=\"Hallo\"/></div></div></div>";

        expect(expected).toBe(result);
    })
});
