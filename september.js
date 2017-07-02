'use strict';

let september = require('wikijs').default().page('september');

module.exports = {
	data : () => september.then(page => page.content()),
	images : () => september.then(page => page.images())
};