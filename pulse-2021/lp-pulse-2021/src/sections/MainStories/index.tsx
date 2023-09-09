import { SectionElement, Stories, TitleBox3d } from '@components/index';
import { Stories as StoriesAssets } from '@/assets/components';
import { FC } from 'react';
import styles from './MainStories.module.scss';
import { observer } from 'mobx-react-lite';
import { heroBackgrounds } from '@/assets';
import { dataHero } from '@/mocks/dataHero';
import { dataMenuLabels } from '@/mocks/menu';
import { metaTags } from '@/constants';

const MainStories: FC = observer(() => {
	return (
		<SectionElement
			id="mobileStories"
			navReference={dataMenuLabels()[0]}
			className={styles.container}
			noPadding
			heightBehaviour="unset"
		>
			{!!metaTags.title && (
				<h1 className={styles.pageHeading}>
					{metaTags.title}
				</h1>
			)}
			<Stories
				items={[
					{
						includeGradient: true,
						title: 'Fiat Pulse',
						body: (
							<div className={styles.firstSlide}>
								<img src={StoriesAssets.content.main} alt="Fiat Pulse o SUV inspirado em você" />
							</div>
						),
						background: {
							src: StoriesAssets.backgrounds.main
						},
						durationInS: 18,
					},
					{
						showNext: true,
						title: dataHero[0].title,
						body: (
							<>
								<div className={styles.slides}>
									<div className={styles.content}>
										<TitleBox3d uppercase text={dataHero[0].title} />
										<h3 className={styles.descriptionContent}>
											{dataHero[0].description}
										</h3>
									</div>
								</div>
							</>
						),
						scrollCtaOrientation: 'vertical',
						background: {
							color: '#222652'
						},
						videoProps: {
							src: heroBackgrounds.design.fullPath.mobile,
						},
						durationInS: 15,
					},
					{
						showNext: true,
						title: dataHero[1].title,
						body: (
							<div
								className={styles.slides}
							>
								<div className={styles.content}>
									<TitleBox3d uppercase text={dataHero[1].title} />
									<TitleBox3d uppercase text={dataHero[1].title2} />

									<h3 className={styles.descriptionContent}>
										{dataHero[1].description}
									</h3>
								</div>
							</div>
						),
						scrollCtaOrientation: 'vertical',
						background: {
							color: '#222652'
						},
						videoProps: {
							src: heroBackgrounds.performance.fullPath.mobile,
						},
						durationInS: 15,
					},
					{
						showNext: true,
						title: dataHero[2].title,
						body: (
							<div
								className={styles.slides}
							>
								<div className={styles.content}>
									<TitleBox3d uppercase text={dataHero[2].title} />

									<h3 className={styles.descriptionContent}>
										{dataHero[2].description}
									</h3>
								</div>
							</div>
						),
						scrollCtaOrientation: 'vertical',
						background: {
							color: '#222652'
						},
						videoProps: {
							src: heroBackgrounds.conectividade.fullPath.mobile,
						},
						durationInS: 15,
					},
					{
						showNext: true,
						title: dataHero[3].title,
						body: (
							<div
								className={styles.slides}
							>
								<div className={styles.content}>
									<TitleBox3d uppercase text={dataHero[3].title} />

									<h3 className={styles.descriptionContent}>
										{dataHero[3].description}
									</h3>
								</div>
							</div>
						),
						scrollCtaOrientation: 'vertical',
						background: {
							color: '#222652'
						},
						videoProps: {
							src: heroBackgrounds.seguranca.fullPath.mobile,
						},
						durationInS: 15,
					},
					{
						showNext: true,
						title: dataHero[4].title,
						body: (
							<div
								className={styles.slides}
							>
								<div className={styles.content}>
									<TitleBox3d uppercase text={dataHero[4].title} />
									<h3 className={styles.descriptionContent}>
										{dataHero[4].description}
									</h3>
								</div>
							</div>
						),
						scrollCtaOrientation: 'vertical',
						background: {
							color: '#222652'
						},
						videoProps: {
							src: heroBackgrounds.robustez.fullPath.mobile,
						},
						durationInS: 15,
					},
				]}
			/>
		</SectionElement>
	)
});

export default MainStories;
