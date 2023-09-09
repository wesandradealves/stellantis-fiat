import * as React from 'react';
import * as PIXI from 'pixi.js';
import cls from 'classnames';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { gsap, TweenMax } from 'gsap';
import PropTypes from 'prop-types';
import * as is from '@dcode/utils/is';
import MouseUtil, { lerp } from './MouseUtils';
import './Pixi360.scss';
import $ from 'jquery';

// do not remove this line
gsap.registerPlugin(CSSPlugin, ScrollToPlugin);

export function pad(number, digits = 2, emptyDigit = 0) {
	return Array(Math.max(digits - String(number).length + 1, 0)).join(emptyDigit) + number;
}

export const defaultProps = {
	loop: true,
	drag: true,
	digits: 2,
	startAt: 0,
	onInit: Function.prototype,
	onLoadProgress: Function.prototype,
	onLoadComplete: Function.prototype,
	onRotate: Function.prototype,
	pathImgs: '<Pixi360.pathImgs>',
	totalImgs: 0,
	ext: '.jpg',
};

export const contextTypes = {
	pixiStage: PropTypes.object,
	pixiCanvas: PropTypes.object,
};

export class Pixi360 extends React.Component {
	container;
	stage;
	state = {};

	onLoadProgress = (progress) => {
		this.props.onLoadProgress(progress);
	};

	onLoadComplete = () => {
		this.renderPixi();
		this.onLoadProgress(1);
		this.props.onLoadComplete();
	};

	componentDidMount() {
		this.setState({ totalImgs: this.props.totalImgs });
		this.create360(this.props);
		if (this.props.drag) {
			$(document).on('MOUSE_UTIL_DRAGGING', this.onMouseUpdate);
		}
	}

	componentWillUnmount() {
		$(document).off('MOUSE_UTIL_DRAGGING', this.onMouseUpdate);
	}

	componentWillReceiveProps({ totalImgs }) {
		if (this.state.totalImgs !== totalImgs) {
			this.create360(this.props);
		}
	}

	create360(props) {
    this.props.onInit();

		let textureLoaded = 0;
		const textures = [];

		let idx = is.number(props.startAt) ? props.startAt : 0;
		const size = props.totalImgs + idx;
		for (idx; idx < size; idx += 1) {
			// idx = 7; // lock texture

			const ext = is.string(props.ext) && props.ext.charAt(0) === '.' ? props.ext : '.jpg';
			const imgSrc = `${props.pathImgs}${pad(idx, props.digits)}${ext}`;
			const texture = PIXI.Texture.fromImage(imgSrc);

			// cache
			if (texture.baseTexture.hasLoaded) {
				textureLoaded++;
				if (textureLoaded === props.totalImgs) {
					this.onLoadComplete();
				} else {
					this.onLoadProgress(textureLoaded / props.totalImgs);
				}
			} else {
				texture.baseTexture.on('loaded', () => {
					textureLoaded++;
					// console.log('[texture loaded]:', textureLoaded, imgSrc);
					if (textureLoaded === props.totalImgs) {
						this.onLoadComplete();
					} else {
						this.onLoadProgress(textureLoaded / props.totalImgs);
					}
				});
			}

			textures.push(texture);
		}

		this.container = new PIXI.extras.MovieClip(textures);
		if (!this.container) return;

		this.container.gotoAndStop(this.lastFrame);
		this.stage = this.context['pixiStage'];
		this.stage.addChild(this.container);

		TweenMax.fromTo(this.stage, 2, { opacity: 0 }, { opacity: 1 });
		this.renderPixi();
	}

	myVX = 0;
	currentPos = 0;
	lastFrame = 0;
	lerpvalue = 0;
	currentFrame = { value: 0 };

	onMouseUpdate = () => {
		if (MouseUtil.isDown) {
			this.myVX = MouseUtil.vx;
		} else {
			this.myVX *= 0.85;
			if (Math.abs(this.myVX) < 10) {
				this.myVX *= 0.1;
			}
		}

		this.currentPos += this.myVX / 35;
		this.lerpvalue = lerp(this.lerpvalue, this.currentPos, 0.5);

		let frame = Math.round(this.lerpvalue) % this.props.totalImgs;
		if (this.props.loop) {
			frame = Math.abs(frame < 0 ? this.props.totalImgs + frame : frame);
		} else {
			frame = Math.abs(frame);
			if (frame <= 0) {
				frame = 0;
			} else if (frame >= this.props.totalImgs - 1) {
				frame = this.props.totalImgs - 1;
			}
		}
		this.gotoAndStop(frame);
	};

	play = (fps) => {
		this.gotoAndPlay(this.lastFrame, fps);
	};

	stop = () => {
		TweenMax.killTweensOf(this.currentFrame);
	};

	gotoAndPlay = (frame, fps = 24, onComplete = undefined) => {
		this.currentFrame = { value: Math.max(0, Math.min(frame, this.container.totalFrames)) };
		const time = 10 + fps / this.container.totalFrames;
		TweenMax.to(this.currentFrame, time, {
			value: this.container.totalFrames,
			roundProps: 'value',
			ease: Linear.easeNone,
			onComplete: () => {
				this.gotoAndPlay(0);
			},
			onUpdate: () => {
				this.gotoAndStop(this.currentFrame.value);
			},
		});
	};

	gotoAndStop = (frame) => {
		if (frame !== this.lastFrame) {
			frame = Math.max(0, Math.min(frame, this.container.totalFrames - 1));
			this.container.gotoAndStop(frame);
			this.lastFrame = frame;
			this.renderPixi();
			this.props.onRotate(frame / (this.container.totalFrames || 1));
		}
	};

	gotoAndStopPercent = (percent) => {
		this.gotoAndStop(Math.round(percent * this.container.totalFrames));
	};

	renderPixi = () => {
		this.context['pixiCanvas'].setRender(true);
	};

	render() {
		this.renderPixi();
		return <div className={cls('Pixi360', this.props.className)} />;
	}
}

Pixi360.displayName = 'Pixi360';
Pixi360.defaultProps = defaultProps;
Pixi360.contextTypes = contextTypes;
export default Pixi360;
