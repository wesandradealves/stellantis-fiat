const CONSTRUCTOR = 'constructor';

const objectSupportsProto = String.prototype === ''.__proto__;

const getPrototypeOf = objectSupportsProto ? function getPrototypeOf(value) {
	return value.__proto__ || Object.prototype;
} : function getPrototypeOf(value) {
	if (Object.prototype.hasOwnProperty.call(value, CONSTRUCTOR)) {
		return Object.prototype;
	}
	return value.constructor.prototype;
};

function constructorOf(value) {
	if (value.constructor === undefined) return Object;
	const proto = getPrototypeOf(value) || Object;
	return proto.constructor;
}

function isObject(value) {
	if (value === undefined || value === null) return false;
	return constructorOf(value) === Object;
}

module.exports = isObject;
