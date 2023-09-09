import React from 'react';
import { Router } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

export class TransitionRouter extends Router {
	callWillLeave = (child) => {
		// child._component._component.componentWillLeave && child._component._component.componentWillLeave();
	};

	render(props, state) {
		return (
			<CSSTransition
				// component="div"
				// classNames="pageTransition"
				// transitionEnter={false}
				// transitionLeave
				// transitionLeaveTimeout={500}
				onExit={this.callWillLeave}>
				{super.render(props, state)}
			</CSSTransition>
		);
	}
}

export default TransitionRouter;
