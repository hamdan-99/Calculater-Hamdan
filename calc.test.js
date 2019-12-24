const assert = require('assert');
const {add, subtract, divide, multiply}= require('./calc');

describe('clac',()=>{
    describe('add',()=>{
        it('can add two numbers',()=>{
            assert.equal(add(5, 3), 8);
            assert.equal(add(-100,-100), -200);
            assert.equal(add(-5, 3), -2);
        });
        it('has floating point numbers',()=>{
            assert.equal(add(0.1, 0.2), 0.30000000000000004);
        }); 
    });
    describe('subtract',()=>{
        it('can subtract tow numbers',()=>{
            assert.equal(subtract(1, -1), 2);
        });
    });
    describe('divide',()=>{
        it('can divide tow numbers',()=>{
            assert.equal(divide(1, -1), -1);
            assert.equal(divide(0.1, 0.2), 0.5);
            assert.equal(divide(24, 4), 6);
        });
    });
    describe('multiply',()=>{
        it('can multiply tow numbers',()=>{
            assert.equal(multiply(1, -1), -1);
            assert.equal(multiply(24, 4), 96);
        });
        it('has floating point numbers',()=>{
            assert.equal(multiply(0.1, 0.2), 0.020000000000000004);
        });
    });
});