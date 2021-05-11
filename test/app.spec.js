const assert = require('assert');
const { add, sub } = require('../app');
const { expect } = require('chai');

// add test
describe('the add function', () => {
    it('should add 2 nums together', () => {
        const result = add(2, 2);
        expect(result).to.be.eq(4);
    })

    it('should work with 1 argument', () => {
        const result = add(2);
        expect(result).to.be.eq(2);
    })

    it('should work with no arguments', () => {
        const result = add();
        expect(result).to.be.eq(0);
    })

    it('should return 0 if either arg is not a number', () => {
        const result = add(1, 'hej');
        expect(result).to.be.eq(0);
    })
});

// sub test
describe('the sub func', () => {
    it('should sub a from b', () => {
        const result = sub(2, 1);
        expect(result).to.be.eq(1);
    });

    it('should work with no arguments', () => {
        const result = sub();
        expect(result).to.be.eq(0);
    })
});