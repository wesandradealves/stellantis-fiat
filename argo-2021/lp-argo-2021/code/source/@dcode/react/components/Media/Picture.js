import * as React from 'react';
import PropTypes from 'prop-types';
import canUseDom from '@dcode/utils/xtras/canUseDom';
import * as is from '@dcode/utils/is';
import Loading from '~/components/Loading/Loading';

function isMobile() {
	const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
	return toMatch.some((toMatchItem) => {
		return navigator.userAgent.match(toMatchItem);
	});
}

const isOSXSafari =
	window.navigator.userAgent.search('Safari') >= 0 && window.navigator.userAgent.search('Chrome') < 0 && !isMobile();

export const propTypes = {
	className: PropTypes.string,
	classNameImg: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string,
	sizes: PropTypes.string,
	shouldRenderize: PropTypes.bool,
	sources: PropTypes.arrayOf(
		PropTypes.exact({
			srcSet: PropTypes.string,
			media: PropTypes.string,
			type: PropTypes.string,
			fallback: PropTypes.object,
			oneOf: PropTypes.arrayOf(
				PropTypes.exact({
					type: PropTypes.string.isRequired,
					srcSet: PropTypes.string,
				}),
			),
		}),
	),
};

export const classes = {};

export const defaultProps = {
	className: '',
	classNameImg: '',
	classes,
	src: undefined,
	alt: '',
	sizes: undefined,
	sources: undefined,
	shouldRenderize: true,
};

export class Picture extends React.PureComponent {
	constructor(props) {
		super(props);
		this.imgEl = React.createRef();
		this.loaded = false;
		this.dumpbase64 =
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABksAAAKCAQMAAABLTXy/AAAABlBMVEVKLYcAAABCe/XyAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAlUlEQVR4nO3BgQAAAADDoPlTH+ECVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAN/SUAASDOx3QAAAAASUVORK5CYII=';
	}

	componentDidMount() {
		try {
			require('picturefill')(); // eslint-disable-line global-require
		} catch (error) {}

		const checkImageSupport = this.props.sources.map(async (source) => {
			if (source.hasOwnProperty('oneOf')) {
				const getAtLeastOne = source.oneOf.map(async (image) => {
					if (image.type === 'image/jpg') {
						try {
							await window.hasjpg();
							return image;
						} catch (e) {
							return false;
						}
					}
					if (image.type === 'image/webp') {
						try {
							await window.hasWebp();
							return image;
						} catch (e) {
							return false;
						}
					}
				});

				try {
					const atLeastOne = await Promise.all(getAtLeastOne);
					const supportedImage = atLeastOne.find(Boolean);

					if (supportedImage) {
						source.type = supportedImage.type;
						source.srcSet = supportedImage.srcSet;
						return source;
					}

					source.type = source.fallback.type;
					source.srcSet = source.fallback.srcSet;
					return source;
				} catch (e) {}
			} else {
				if (source.type === 'image/jpg') {
					try {
						await window.hasjpg();
						return source;
					} catch (e) {
						source.srcSet = source.fallback.srcSet;
						source.type = source.fallback.type;
						return source;
					}
				}

				if (source.type === 'image/webp') {
					try {
						await window.hasWebp();
						return source;
					} catch (e) {
						source.srcSet = source.fallback.srcSet;
						source.type = source.fallback.type;
						return source;
					}
				}
			}

			return source;
		});

		Promise.all(checkImageSupport)
			.then((sources) => this.setState({ sources }))
			.catch((sources) => this.setState({ sources }));
	}

	renderSources() {
		const { sources, shouldRenderize } = this.props;
		let ieVersion = -1;
		if (canUseDom && document.documentMode) {
			ieVersion = document.documentMode;
		}
		if (is.unavail(sources)) return null;

		const mappedSources = sources.map((source, index) => {
			if (is.unavail(source.srcSet)) return null;
			return (
				<source
					key={`sources-${index}`}
					srcSet={shouldRenderize ? source.srcSet : this.dumpbase64}
					media={source.media}
					type={source.type}
				/>
			);
		});
		if (ieVersion === 9) {
			return <video style={{ display: 'none' }}>{mappedSources}</video>;
		}
		return mappedSources;
	}

	renderImage(props, skipSizes = false) {
		const {
			alt = '',
			src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
			sizes,
			classNameImg,
			classes: _,
			shouldRenderize: __,
			...rest
		} = props;
		let $src = src;
		const sizesProp = skipSizes ? null : { sizes };
		if (isOSXSafari && this.props.sources.length > 1 && this.props.sources[1]) {
			$src = this.props.sources[1].srcSet;
		}
		return (
			<img
				ref={this.imgEl}
				alt={alt ? alt : 'picture'}
				srcSet={$src}
				{...sizesProp}
				{...rest}
				className={classNameImg}
			/>
		);
	}

	get isLoading() {
		if (this.props.hasOwnProperty('render')) {
			return !this.loaded;
		} else {
			return false;
		}
	}

	render() {
		const { className, sources, ...rest } = this.props;
		if (is.avail(sources)) {
			return (
				<picture className={className}>
					{this.renderSources()}
					{this.renderImage(rest, true)}
				</picture>
			);
		}
		return this.renderImage(rest);
	}
}

Picture.displayName = 'Picture';
Picture.propTypes = propTypes;
Picture.defaultProps = defaultProps;
export default Picture;
