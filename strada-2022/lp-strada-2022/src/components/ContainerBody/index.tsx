import { observer } from 'mobx-react-lite';
import NextHead from 'next/head';
import { motion, MotionProps } from 'framer-motion';
import { Header } from '@components/index';
import { AnimationType, MetaType } from 'src/models';
import { metaTags } from 'src/constants';
import styles from './ContainerBody.module.scss';
import Navigation from '../Navigation';

interface ContainerBodyProps {
	animationType?: AnimationType;
	meta?: MetaType;
	includeNavigation?: boolean;
}

const ContainerBody: React.FC<ContainerBodyProps> = observer(
	({ children, animationType = 'fade-in', meta = metaTags, includeNavigation = false }) => {
		const initialScale: MotionProps['initial'] = {
			scale: 0.4,
			opacity: 0,
		};

		const initialSlideIn: MotionProps['initial'] = {
			x: '100%',
			opacity: 0,
		};

		const initialTop: MotionProps['initial'] = { y: -50, opacity: 0 };

		const initialFadeIn: MotionProps['initial'] = {
			opacity: 0,
		};

		const animateScale: MotionProps['animate'] = {
			scale: 1,
			opacity: 1,
		};

		const animateSlideIn: MotionProps['animate'] = {
			x: '0%',
			opacity: 1,
		};

		const animateTop: MotionProps['animate'] = {
			y: 0,
			opacity: 1,
		};

		const animateFadeIn: MotionProps['animate'] = {
			opacity: 1,
		};

		const transitionScale: MotionProps['transition'] = { delay: 0.1 };

		const transitionSlideIn: MotionProps['transition'] = { delay: 0.4 };
		const transitionFadeIn: MotionProps['transition'] = { duration: 0.2 };

		const transitionTop: MotionProps['transition'] = { delay: 0.5 };

		interface AnProps {
			initial: MotionProps['initial'];
			animate: MotionProps['animate'];
			transition: MotionProps['transition'];
		}

		interface AnimationPropertiesType {
			top: AnProps;
			'slide-in': AnProps;
			scale: AnProps;
			'fade-in': AnProps;
		}
		const animationProperties: AnimationPropertiesType = {
			top: {
				animate: animateTop,
				initial: initialTop,
				transition: transitionTop,
			},
			'slide-in': {
				animate: animateSlideIn,
				initial: initialSlideIn,
				transition: transitionSlideIn,
			},
			'fade-in': {
				animate: animateFadeIn,
				initial: initialFadeIn,
				transition: transitionFadeIn,
			},
			scale: {
				animate: animateScale,
				initial: initialScale,
				transition: transitionScale,
			},
		};

		return (
			<>
				<NextHead>
					<title>{meta.title}</title>
					<meta name="description" content={meta.description} />
					<meta name="title" content={meta.title} />
					<meta property="og:url" content={meta.url} />
					<meta property="og:title" content={meta.title} />
					<meta property="og:description" content={meta.description} />
					<meta property="image" content={meta.image} />
					<meta property="og:image" content={meta.image} />
					<meta name="twitter:card" content={meta.twitter.card} />
					<meta name="tiwtter:site" content={meta.twitter.site} />
					<meta name="tiwtter:image" content={meta.twitter.image} />
				</NextHead>
				<div className={includeNavigation ? styles.columnDivider : ''}>
					{includeNavigation && (
						<Navigation />
					)}
					<div className={styles.container}>
						<motion.div
							id="scroll-snap"
							initial={animationProperties[animationType].initial}
							animate={animationProperties[animationType].animate}
							transition={animationProperties[animationType].transition}
						>
							<Header />
							{children}
						</motion.div>
					</div>
				</div>
			</>
		);
	},
);

export default ContainerBody;
