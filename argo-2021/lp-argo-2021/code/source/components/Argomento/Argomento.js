import React from 'react';
import Fade from 'react-reveal/Fade';
import cls from 'classnames';
import PropTypes from 'prop-types';
import * as is from '@dcode/utils/is';
import { Picture } from '@dcode/react/components/Media';
import IconCross from './IconCross';
import css from './Argomento.scss';

export const classes = {
	root: css.argomento,
	header: css.argomentoHeader,
	headerTitle: css.argomentoHeaderTitle,
	frame: css.argomentoFrame,
	frameOuter: css.argomentoFrameOuter,
	frameInner: css.argomentoFrameInner,
	frameSpriteImg: css.argomentoFrameSpriteImg,
	framePicture: css.argomentoFramePicture,
	framePictureImg: css.argomentoFramePictureImg,
	frameButton: css.argomentoFrameButton,
	frameButtonIcon: css.argomentoFrameButtonIcon,
	frameInfo: css.argomentoFrameInfo,
	frameInfoTitle: css.argomentoFrameInfoTitle,
	frameInfoSubtitle: css.argomentoFrameInfoSubtitle,
	char: css.char,
	char01: css.char01,
	char02: css.char02,
	char03: css.char03,
	char04: css.char04,
	char05: css.char05,
	char06: css.char06,
	char07: css.char07,
	char08: css.char08,
	char09: css.char09,
	char10: css.char10,
	char11: css.char11,
	charPlural: css.charPlural,
	isMini: css.isMini,
	animate: css.animate,
};

export const propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object,
	mini: PropTypes.bool,
	num: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
	subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
	useNum: PropTypes.bool,
	useSprite: PropTypes.bool,
	mobile: PropTypes.bool,
};

export const defaultProps = {
	className: '',
	classes,
	mini: false,
	num: 0,
	useNum: false,
	useSprite: false,
	usePlural: true,
	mobile: false,
	title: '&nbsp;',
	subtitle: '',
};

export function Argomento({ className, classes, ...props }) {
	const renderSource = (props, index) => {
		return <source key={index} {...props} />;
	};

	const renderSourceList = (list) => {
		return list.map(renderSource);
	};

	const renderP = (value, props) => {
		if (is.string(value)) {
			return <p {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
		}
		return <p {...props}>{value}</p>;
	};

	const renderSpan = (value, props) => {
		if (is.string(value)) {
			return <span {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
		}
		return <span {...props}>{value}</span>;
	};

	const renderPicture = (sources, index = 0) => {
		return (
			<Picture
				className={cls(classes.framePicture)}
				classNameImg={cls(classes.framePictureImg)}
				sources={sources}
			/>
		);
	};

	const renderImage = (sprite, index = 0) => {
		return (
			<img
				key={index}
				alt='argo'
				className={cls(classes.frameSpriteImg, { [classes.animate]: props.mobile })}
				{...sprite}
			/>
		);
	};

	const renderSprite = (list) => {
		return list.map(renderImage);
	};

	const renderPictureList = (list) => {
		return list.map(renderPicture);
	};

	const { mini, num, useNum, usePlural, useSprite, mobile, sources, title, subtitle, children, ...rootProps } = props;
	return (
		<div
			className={cls(classes.root, className, {
				[classes.isMini]: mini,
			})}
			{...rootProps}>
			<header className={cls(classes.header)}>
				{!mini && (
					<h3 className={cls(classes.headerTitle)}>
						{renderSpan('A', {
							className: cls(classes.char01),
						})}
						{renderSpan('R', {
							className: cls(classes.char02),
						})}
						{renderSpan('G', {
							className: cls(classes.char03),
						})}
						{renderSpan('O', {
							className: cls(classes.char04),
						})}
						{renderSpan('M', {
							className: cls(classes.char05),
						})}
						{renderSpan('E', {
							className: cls(classes.char06),
						})}
						{renderSpan('N', {
							className: cls(classes.char07),
						})}
						{renderSpan('T', {
							className: cls(classes.char08),
						})}
						{renderSpan('O', {
							className: cls(classes.char09),
						})}
						{usePlural &&
							!useNum &&
							renderSpan('S', {
								className: cls(classes.charPlural),
							})}
						{useNum &&
							renderSpan(' Nº ', {
								className: cls(classes.char10),
							})}
						{useNum &&
							renderSpan(num, {
								className: cls(classes.char11),
							})}
					</h3>
				)}
			</header>
			<div className={cls(classes.frame)}>
				<div className={cls(classes.frameOuter)}>
					<div className={cls(classes.frameInner)}>
						{useSprite ? renderSprite(sources) : renderPicture(sources)}
					</div>
					<Fade bottom>
						<div className={cls(classes.frameButton)}>
							<IconCross className={cls(classes.frameButtonIcon)} />
						</div>
					</Fade>
				</div>
				<footer className={cls(classes.frameInfo)}>
					{renderP(title, {
						className: cls(classes.frameInfoTitle),
					})}
					{!mini &&
						subtitle &&
						renderP(subtitle, {
							className: cls(classes.frameInfoSubtitle),
						})}
				</footer>
				{children}
			</div>
		</div>
	);
}

Argomento.displayName = 'Argomento';
Argomento.propTypes = propTypes;
Argomento.defaultProps = defaultProps;
export default Argomento;
