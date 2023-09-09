const objectSupportsProto = String.prototype === ''.__proto__;

const is = Object.is || ((valueA, valueB) => {
	if (valueA === valueB) {
		if (valueA === 0) return 1 / valueA === 1 / valueB;
		return true;
	}
	const a = valueA;
	const b = valueB;
	return valueA !== a && valueB !== b;
});

const getPrototypeOf = objectSupportsProto ? (value) => (
	value.__proto__ || Object.prototype
) : (value) => {
	if (Object.prototype.hasOwnProperty.call(value, 'constructor')) {
		return Object.prototype;
	}
	return value.constructor.prototype;
};

function constructorOf(value) {
	if (value.constructor === undefined) return Object;
	const proto = getPrototypeOf(value) || Object;
	return proto.constructor;
}

function isEqual(valueA, valueB) {
	let size;
	if (valueA === undefined || valueA === null) {
		return is(valueA, valueB);
	} else if (valueB === undefined || valueB === null) {
		return is(valueB, valueA);
	} else if (is(valueA, valueB)) {
		return true;
	}
	const constructorA = constructorOf(valueA);
	const constructorB = constructorOf(valueB);
	if ((constructorA === constructorB) === false) {
		return false;
	} else if (constructorA === Object) {
		const keysA = Object.keys(valueA);
		const keysB = Object.keys(valueB);
		size = keysA.length;
		if ((size === keysB.length) === false) {
			return false;
		}
		for (size -= 1; size > -1; size -= 1) {
			const key = keysA[size];
			if (isEqual(valueA[key], valueB[key]) === false) {
				return false;
			}
		}
		return true;
	} else if (constructorA === Array) {
		size = valueA.length;
		if ((size === valueB.length) === false) {
			return false;
		}
		for (size -= 1; size > -1; size -= 1) {
			if (isEqual(valueA[size], valueB[size]) === false) {
				return false;
			}
		}
		return true;
	} else if (constructorA === Function) {
		return valueA.prototype === valueB.prototype;
	} else if (constructorA === Date) {
		return valueA.getTime() === valueB.getTime();
	} else if (constructorA === RegExp) {
		return valueA.source === valueB.source && valueA.flags === valueB.flags;
	}
	return false;
}

module.exports = isEqual;
