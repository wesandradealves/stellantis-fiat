import { Module } from 'cerebral';
import { toggle } from 'cerebral/operators';
import { state } from 'cerebral/tags';

export default Module({
	state: {
		isOpen: false,
	},
	signals: {
		toggleMenuFixed: [toggle(state`menuFixed.isOpen`)],
	},
});
