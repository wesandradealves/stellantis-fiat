/* eslint-disable */
import React from 'react';
import cls from 'classnames';
import { TweenMax } from 'gsap/all';
import css from './Loading.scss';

const classes = {
	root: css.loading,
	bg: css.bg,
	circle: css.circle,
	isMobile: css.isMobile,
	loadingRotate: css.loadingRotate,
};

const defaultProps = {
	className: '',
	classes,
};

export class Loading extends React.Component {
	constructor(props) {
		super(props);
		this.root = React.createRef();
	}

	show(props) {
		TweenMax.killTweensOf(this.root.current);
		return TweenMax.to(this.root.current, 0.5, { ...props, autoAlpha: 1 });
	}

	hide(props) {
		TweenMax.killTweensOf(this.root.current);
		return TweenMax.to(this.root.current, 0.5, { ...props, autoAlpha: 0 });
	}

	componentDidMount() {
		const { display = true } = this.props;
		display ? this.show() : this.hide();
	}

	render() {
		const { className, classes, ...props } = this.props;
		return (
			<div ref={this.root} {...props} className={cls(classes.root, className)}>
				<div className={classes.bg} />
				<svg preserveAspectRatio='xMidYMid meet' viewBox='-100 -100 200 200'>
					<circle cx='0' cy='0' r='100' />
					<circle className={classes.circle} strokeDasharray='50 100' cx='0' cy='0' r='90.2' />
				</svg>
			</div>
		);
	}
}

Loading.defaultProps = defaultProps;
export default Loading;
