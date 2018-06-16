"use strict";

const test = require('tap').test;

const summer = require('./summer');

test('summer function should return the sum of an array of numbers', function(t) {
    const actual = summer([1,2,3,4,5]);
    const expected = 15;
    t.equal(actual, expected, `Should equal the sum of ${actual}`);
    t.end();
})