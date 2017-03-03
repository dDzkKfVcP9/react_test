import {describe, it} from 'mocha'
import expect from 'expect'

describe('String Tests', () => {

    it('Pruefe ob ein String gleich ist', () => {
        var test = "test";
        expect("test").toBe(test);
    })

    it('Pruefe ein String mit equal', () => {
        var test = "test";
        expect("test").toEqual(test);
    })

    it('Pruefe ein String mit contain', () => {
        var teilstring = "es";
        expect("test").toContain(teilstring);
    })
})

