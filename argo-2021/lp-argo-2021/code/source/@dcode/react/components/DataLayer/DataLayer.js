import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as is from '@dcode/utils/is';
import './DataLayer.scss';

export const propTypes = {
	log: PropTypes.node,
	onLoad: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	onEvent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	args: PropTypes.arrayOf(PropTypes.node),
};

export const consoleArgs = (method, type, ...info) => [
	`\n %c %c %c DataLayer ${method} ✰ ${type} ✰  %c  %c  ${info}  %c \n`,
	'padding:5px 0; background: #0296ff;',
	'padding:5px 0; background: #0296ff;',
	'padding:5px 0; background: #030307; color: #0296ff;',
	'padding:5px 0; background: #0296ff;',
	'padding:5px 0; background: #24ced1; color: #000000;',
	'padding:5px 0; background: #0296ff;',
];

export class DataLayer extends PureComponent {
	static init(tracksObject, ...rest) {
		if (is.avail(tracksObject)) {
			console.info('DataLayer was started!');
			DataLayer.tracks = tracksObject;
			DataLayer.args = rest;
		} else {
			console.error('DataLayer.init only accept an object');
		}
	}

	static push(idOrInfo, ...params) {
		if (!DataLayer.tracks) {
			return console.warn('You should to call "DataLayer.init" method in order to send a push to %s.', idOrInfo);
		}
		if (is.string(idOrInfo) && is.fn(DataLayer.tracks[idOrInfo])) {
			const fnReturn = DataLayer.tracks[idOrInfo](...params, ...DataLayer.args);
			if ('dataLayer' in window && fnReturn) {
				console.info.apply(console, consoleArgs('push', idOrInfo, ...params, ...DataLayer.args));
				window.dataLayer.push(fnReturn);
			}
		}
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

	pushEvent(params) {
		DataLayer.pushEvent(params);
	}

	pushLoad(params) {
		DataLayer.pushLoad(params);
	}

	renderChildren = () => {
		if (this.props.log) console.log('DataLayer::', this.props.log);
		if (this.props.onEvent) {
			if (is.string(this.props.onEvent)) {
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
					this.pushEvent(this.props.onEvent);
				},
			});
		}
		if (this.props.onLoad) {
			this.pushLoad(this.props.onLoad);
		}
		return this.props.children;
	};

	render() {
		return this.renderChildren();
	}
}

window.DataLayer = DataLayer;
DataLayer.propTypes = propTypes;
export default DataLayer;
