/* eslint-disable */
import React, { PureComponent } from 'react';
import isAvail from '../avail/avail';
import isString from '../string/string';
import isFunction from '../fn/fn';

const consoleArgs = (method, type, ...info) => [
	`\n %c %c %c DataLayer ${method} ✰ ${type} ✰  %c  %c  ${info}  %c \n`,
	'padding:5px 0; background: #212652;',
	'padding:5px 0; background: #212652;',
	'padding:5px 0; background: #030307; color: orange;',
	'padding:5px 0; background: #212652;',
	'padding:5px 0; background: #24ced1; color: #000000;',
	'padding:5px 0; background: #212652;',
];

export class DataLayer extends PureComponent {
	static init(tracksObject, ...rest) {
		if (isAvail(tracksObject)) {
      console.info('DataLayer was started!');
			DataLayer.tracks = tracksObject;
			DataLayer.args = rest;
      // console.log(DataLayer.args)
		} else {
			console.error('DataLayer.init only accept an object');
		}
	}

	static push(idOrInfo, ...params) {
		if (!DataLayer.tracks) {
			return console.warn('You should to call "DataLayer.init" method in order to send a push to %s.', idOrInfo);
		}
		if (isString(idOrInfo) && isFunction(DataLayer.tracks[idOrInfo])) {
			const fnReturn = DataLayer.tracks[idOrInfo](...params, ...DataLayer.args);
			// console.info(...consoleArgs('push', idOrInfo, ...params, ...DataLayer.args));
			if (window.dataLayer && typeof window.dataLayer.push === 'function' && fnReturn) {
				return window.dataLayer.push(fnReturn);
			}
		}
		return undefined;
	}

	static pushEvent(idOrInfo) {
		DataLayer.push(idOrInfo);
		console.log('DataLayer.onEvent:', idOrInfo);
	}

	static pushLoad(idOrInfo) {
		DataLayer.push(idOrInfo);
		console.log('DataLayer.onLoad:', idOrInfo);
	}

	static applyPush(idOrInfo, args) {
		DataLayer.push.apply(DataLayer.push, [idOrInfo].concat(args));
	}

	constructor(props) {
		super(props);
		this.renderChildren = this.renderChildren.bind(this);
		this.pushEvent = DataLayer.pushEvent;
		this.pushLoad = DataLayer.pushLoad;
	}

	renderChildren() {
		if (this.props.log) console.log('DataLayer::', this.props.log);
		if (this.props.onEvent) {
			if (isString(this.props.onEvent)) {
				return React.cloneElement(this.props.children, {
					onClick: (evt, ...args) => {
						if (this.props.children.props.onClick) {
							this.props.children.props.onClick(evt, ...args);
						}
						DataLayer.applyPush(this.props.onEvent, this.props.args);
					},
				});
			}
			return React.cloneElement(this.props.children, {
				'data-tracking-type': this.props.onEvent.type,
				'data-tracking-props': this.props.onEvent.props,
				onClick: (evt, ...args) => {
					if (this.props.children.props.onClick) {
						this.props.children.props.onClick(evt, ...args);
					}
					DataLayer.pushEvent(this.props.onEvent);
				},
			});
		}
		if (this.props.onLoad) {
			DataLayer.pushLoad(this.props.onLoad);
		}
		return this.props.children;
	}

	render() {
		return this.renderChildren();
	}
}

window.DataLayer = DataLayer;
export default DataLayer;
