"use strict";

function summer(numbers) {
    return numbers.reduce(function(prev, curr) {
        return prev + curr
    }, 0);
}

module.exports = summer;