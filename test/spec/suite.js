'use strict';

let september = require('../../september.js');
let _ = require('lodash');

module.exports = (test, Promise) => {

    return september.data()
    .then(data => {
        test.equal(_.isString(data), true, 'Fetching #data');
        return september.images();
    })
    .then(images => {
        return test.equal(_.isArray(images), true, 'Fetching #images');
    })
    .catch(err => test.fail(err))
};


