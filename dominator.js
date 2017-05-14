const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');


const getElementById = function(root1, id2) {
	let flat = flattenTreeToArray(root1);
	return _.filter(flat, value => value.id === id2)[0];
};

const getElementsByClassName = function(root1, className2) {
	let flat = flattenTreeToArray(root1);
	// flat.filter(value => _.contains(value.className.split(' '), className2));
	return _.filter(flat, value => {
		if (value.className) {
			return _.contains(value.className.split(' '), className2);
		} else {
			return false;
		}
	});
}
const getElementsByTagName = function(root1, tagName2) {
  let flat = flattenTreeToArray(root1);
  return _.filter(flat, value => value.tagName === tagName2);
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};