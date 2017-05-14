const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
    if (typeof obj === 'number') {
        return obj.toString();
    }
    if (obj === null) {
        return 'null';
    }
    if (obj === true) {
        return 'true';
    }

    if (obj === false) {
        return 'false';
    }

    if (typeof obj === 'string') {
        return `"${obj}"`;
    }
    if (Object.keys(obj).length === 0 && obj.constructor === Object) {
        return '{}';
    }

    if (Array.isArray(obj)) {
        if (obj.length === 0) {
            return '[]';
        }
    }

    if (Array.isArray(obj)) {
        if (obj.length > 0) {
            let val = _.map(obj, value => stringify(value));
            return '[' + val.join() + ']'
        }
    }

    if (Object.keys(obj).length > 0 && obj.constructor === Object) {
    	let val = _.map(obj, (value, key) => stringify(key) + ':' + stringify(value));
    	return "{" + val.join() + "}";
    }
};

module.exports = {
    stringify: stringify
};
