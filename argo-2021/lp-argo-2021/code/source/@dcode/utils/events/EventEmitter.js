import * as is from '@dcode/utils/is';
import overload from '@dcode/utils/xtras/overload';

let globalEmitter;

export const hasOwnProp = Object.prototype.hasOwnProperty;

export const getInstance = () => {
	if (globalEmitter === undefined) globalEmitter = new EventEmitter();
	return globalEmitter;
};

export const on = (...args) => {
	const instance = EventEmitter.getInstance();
	return instance.on.apply(instance, args);
};

export const once = (...args) => {
	const instance = EventEmitter.getInstance();
	return instance.once.apply(instance, args);
};

export const off = (...args) => {
	const instance = EventEmitter.getInstance();
	return instance.off.apply(instance, args);
};

export const emit = (...args) => {
	const instance = EventEmitter.getInstance();
	return instance.emit.apply(instance, args);
};

export const getWildcardListeners = (...args) => {
	const instance = EventEmitter.getInstance();
	return instance.getWildcardListeners.apply(instance, args);
};

export const releaseGroup = (...args) => {
	const instance = EventEmitter.getInstance();
	return instance.releaseGroup.apply(instance, args);
};

export const addListener = (type, callback, context) => {
	if (is.string(type) && is.fn(callback)) {
		if (context) callback = callback.bind(context);
		return window.addEventListener(type, callback);
	}
};

export const notifyListener = (type) => {
	if (is.string(type)) {
		const event = new window.Event(type);
		return window.dispatchEvent(event);
	}
};

export const removeListener = (type, callback) => {
	if (is.string(type) && is.fn(callback)) {
		return window.removeEventListener(type, callback);
	}
};

export class EventEmitter {
	static getInstance = getInstance;
	static on = on;
	static once = once;
	static off = off;
	static emit = emit;
	static getWildcardListeners = getWildcardListeners;
	static releaseGroup = releaseGroup;
	static addListener = addListener;
	static notifyListener = notifyListener;
	static removeListener = removeListener;

	constructor() {
		this.listeners = {};
	}

	off(event, callback) {
		const listeners = this.listeners[event];
		if (!listeners) {
			return this;
		}
		if (arguments.length === 1) {
			delete this.listeners[event];
			return this;
		}
		const index = listeners.indexOf(callback);
		if (~index) {
			delete this.listeners[event][index]._groupName;
			delete this.listeners[event][index]._context;
			listeners.splice(index, 1);
		}
		if (listeners.length === 0) {
			delete this.listeners[event];
		}
		return this;
	}

	emit(event, ...args) {
		let listeners, index, total;
		const callbacks = this.listeners[event];
		const specialCallbacks = this.getWildcardListeners(event);
		if (callbacks) {
			listeners = callbacks.slice();
			for (index = 0, total = listeners.length; index < total; ++index) {
				if (is.fn(listeners[index])) {
					listeners[index].apply(listeners[index]._context, args);
				} else {
					break;
				}
			}
		}
		if (specialCallbacks) {
			listeners = specialCallbacks.slice();
			for (index = 0, total = listeners.length; index < total; ++index) {
				if (is.fn(listeners[index])) {
					listeners[index].apply(listeners[index]._context, [event].concat(args));
				} else {
					break;
				}
			}
		}
		return this;
	}

	releaseGroup(groupName) {
		for (const item in this.listeners) {
			const handlers = this.listeners[item];
			for (let index = 0, total = handlers.length; index < total; index++) {
				if (handlers[index]._groupName === groupName) {
					delete handlers[index]._groupName;
					delete handlers[index]._context;
					handlers.splice(index, 1);
					index--;
					total--;
				}
			}
		}
		return this;
	}

	getWildcardListeners(eventName) {
		let result = [];
		for (const item in this.listeners) {
			if (hasOwnProp.call(this.listeners, item)) {
				const split = item.split('*');
				if (item === '*' || (split.length === 2 && eventName.slice(0, split[0].length) === split[0])) {
					result = result.concat(this.listeners[item]);
				}
			}
		}
		return result;
	}

	unproxyAll() {
		return unproxyAll(this, slice(arguments));
	}

	proxyAll() {
		return proxyAll(this, slice(arguments));
	}

	unproxy(cmd) {
		return unproxy(cmd);
	}

	proxy(cmd, context) {
		return proxy(cmd, context || this);
	}
}

overload(EventEmitter.prototype, 'on', function on(event, callback) {
	callback._context = this;
	this.listeners[event] = this.listeners[event] || [];
	this.listeners[event].push(callback);
	return this;
});

overload(EventEmitter.prototype, 'on', function on(event, callback, context) {
	callback._context = context;
	this.listeners[event] = this.listeners[event] || [];
	this.listeners[event].push(callback);
	return this;
});

overload(EventEmitter.prototype, 'on', function on(event, callback, context, groupName) {
	callback._groupName = groupName;
	callback._context = context;
	this.listeners[event] = this.listeners[event] || [];
	this.listeners[event].push(callback);
	return this;
});

overload(EventEmitter.prototype, 'once', function once(event, callback) {
	const self = this;
	this.on(event, function on() {
		self.off(event, on);
		callback.apply(this, arguments);
	});
	return this;
});

overload(EventEmitter.prototype, 'once', function once(event, callback, context) {
	const self = this;
	this.on(
		event,
		function on() {
			self.off(event, on);
			callback.apply(this, arguments);
		},
		context,
	);
	return this;
});

overload(EventEmitter.prototype, 'once', function once(event, callback, context, groupName) {
	const self = this;
	this.on(
		event,
		function on() {
			self.off(event, on);
			callback.apply(this, arguments);
		},
		context,
		groupName,
	);
	return this;
});

function mapContext(cmd, context, methods) {
	const names = methods.length ? methods : Object.keys(context);
	names.forEach((method) => {
		if (is.fn(context[method])) {
			context[method] = cmd(context[method], context);
		}
	});
	return context;
}

function proxy(cmd, context, ...args) {
	const hasArgs = args.length;
	const fn = function $proxy(...fnArgs) {
		return cmd.apply(context, hasArgs ? args.concat(fnArgs) : fnArgs);
	};
	fn.__bind__ = fn.__bind__ || cmd;
	return fn;
}

function unproxy(cmd) {
	const cache = cmd.__bind__;
	delete cmd.__bind__;
	return cache;
}

function proxyAll(context, ...args) {
	const methods = Array.isArray(args[0]) ? args[0] : args;
	return mapContext(proxy, context, methods);
}

function unproxyAll(context, ...args) {
	const methods = Array.isArray(args[0]) ? args[0] : args;
	return mapContext(unproxy, context, methods);
}

export default EventEmitter;
